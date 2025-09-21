import { inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Todo } from './todo';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todos = signal<Todo[]>([]);
  url: string = 'https://jsonplaceholder.typicode.com/todos';
  http = inject(HttpClient);

  todosObservable$ = toObservable(this.todos);

  constructor() {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(
      tap(todos => this.todos.set(todos))
    );
  }

  get todos$() {
    return this.todos.asReadonly();
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  getByDateCreation(dateCreation: string, checked : boolean): Observable<Todo[]> {
    // dans le cas où on utilise l'API 
    // return this.http.get<Todo[]>(`${this.url}?dateCreation=${dateCreation}`);

    return this.todosObservable$.pipe(
      map((todos: Todo[]) => checked ? todos.filter(todo => todo.dateCreation === dateCreation && todo.completed) : todos.filter(todo => todo.dateCreation === dateCreation))
    );
  }

  
  createTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    const sortedTodos = [...this.todos()].sort((a, b) => b.id - a.id);
    const newTodo: Todo = { ...todo, id: sortedTodos[0]?.id + 1 || 1 }; // Si la liste est vide, commencer à 1
    this.todos.update(todos => [...todos, newTodo]);

    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(id: number): Observable<void> {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  updateTodo(id: number, updatedTodo: Partial<Todo>): Observable<Todo> {
    this.todos.update(todos => 
      todos.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo)
    );
    
    return this.http.patch<Todo>(`${this.url}/${updatedTodo.id}`, updatedTodo).pipe(
      tap((todo: Todo) => {
        this.todos.update(todos => 
          todos.map(t => t.id === todo.id ? todo : t)
        );
      })
    );
  }
  
}
