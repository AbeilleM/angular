import { Component, input } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './html/todo-list.html',
  styleUrl: '../app.css',

})
export class TodoList {
  constructor(readonly todoList: TodoService) { }

  todo = input<Todo>({} as Todo);

  getByIdTodo(id: number) : void {
    const test = this.todoList.deleteTodo(id);
    console.log(test);
  }

  updateTodo(id: number, completed: boolean) : void {
    this.todoList.updateTodo({id: id, completed: !completed });
  }
}