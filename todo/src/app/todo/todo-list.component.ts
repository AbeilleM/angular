import { Component, input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './html/todo-list.html',
  styleUrl: '../app.css',

})
export class TodoList {
  todo = input<Todo>({} as Todo);
}