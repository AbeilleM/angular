import { inject, Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = signal<Todo[]>([]);
  url: string = 'https://jsonplaceholder.typicode.com/todos';
  http = inject(HttpClient);

  constructor() {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(
      tap(todos => this.todos.set(todos))
    );
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  
  createTodo(todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
  
}
