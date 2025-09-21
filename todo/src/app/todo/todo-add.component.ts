import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [
      FormsModule
],
  templateUrl: './html/todo-add.html',
  styleUrl: './html/addWindow.css',

})
export class TodoAdd {
    constructor(private todoService: TodoService,
    private dialogRef: MatDialogRef<TodoAdd>
    ) {}
    
    newToDo: string = '';
    newDateCreation: string = '';

    onAddToDoClick() : void {

    const todoAdded = { 
      userId: 1, 
      title: this.newToDo, 
      completed: false, 
      // dateCreation: new Date().toISOString().slice(0, 10), 
      dateCreation: new Date(this.newDateCreation).toISOString().slice(0, 10),
      dateCompleted: null
    }

    this.todoService.createTodo(todoAdded);

  }

  closeAddWindow(): void {
    this.dialogRef.close();
  }
}