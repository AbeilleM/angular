import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoAdd } from './todo-add.component';
import { Todo } from './todo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoAddService {
  constructor(private dialog: MatDialog) {}

  private toDoListSubject = new BehaviorSubject<Todo[]>([]);
  toDoList$ = this.toDoListSubject.asObservable();

  openAddWindow() {
    this.dialog.open(TodoAdd);
  }
}