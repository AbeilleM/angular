import { Component, effect, inject, NgModule, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TodoList } from './todo/todo-list.component';
import { DatePicker } from './components/date-picker.component';

import { TodoAddService } from './todo/todo-add.service';
import { TodoService } from './todo/todo.service';

import { Todo } from './todo/todo';



@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    TodoList,
    DatePicker
  ],
  templateUrl: './app.html',
  
  styleUrl: './app.css'
})
export class App {
  listExample = [
    {id: 0, task : 'Mettre à jour le CSS'}, 
    {id: 1, task : 'Faire une vraie interface TODO'}, 
    {id: 2, task : 'Suppression d\'une tâche'},
    {id: 3, task : 'On check, mettre à jour la table'}
  ];

  todoService = inject(TodoService);
  subscription!: Subscription;

  toDoList : Todo[] = [];

  constructor(readonly todo: TodoService, readonly todoAdd: TodoAddService) {
    
    effect(() => {
      this.toDoList = this.todoService.todos$();
    });
  }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe({
      next: (data) => {
        data.forEach(element => {
          element.dateCreation  = new Date().toISOString().slice(0, 10); 
        });
        this.toDoList = data
        console.log(this.toDoList);
      },
      error: (err) => console.error('Erreur API :', err)
    });
  }

  filteredTodos: Todo[] = [];

  onDateFilter(date: string) {
    this.todoService.getByDateCreation(date).subscribe(data => {
      this.filteredTodos = data;
    });
  }

  // ngOnInit() : void {
  //   this.subscription = this.todoService.getTodo().subscribe();
  // }

  openAddWindow() {
    this.todoAdd.openAddWindow();
  }
  

  newToDo = '';
  dateFilter = null;

  getByIdTodo(id: number) : void {
    const test = this.todo.getTodoById(id);
    console.log(test);
  }
  
}
