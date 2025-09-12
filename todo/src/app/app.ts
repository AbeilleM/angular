import { Component, signal } from '@angular/core';
import { TodoService } from './todo-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  // templateUrl: './app.html',
  template: `
    <ul>
    @for (todo of listExample; track todo.id) {
      <li>{{ todo.task }}</li>
    }
    </ul>

    <h1>To Do List</h1>

    <div>
    <form>
    <input 
      type="text"
      [(ngModel)]="newToDo"
      [ngModelOptions]="{standalone: true}"
      />
    </form>
    <button (click)="onAddToDoClick()">Ajouter</button>
    </div>

    @for (todo of toDoList; track todo.id) {
    <div class="checkbox-wrapper">
      <input 
      type="checkbox" 
      id="{{ todo.id }}" 
      name="{{ todo.title }}" 
      [attr.checked]="todo.completed ? '' : null"
      />
      <label for="{{ todo.title }}">{{ todo.title }}</label>
    </div>
    }
    
  `,    
  styleUrl: './app.css'
})
export class App {
  listExample = [
    {id: 0, task : 'Mettre à jour le CSS'}, 
    {id: 1, task : 'Faire une vraie interface TODO'}, 
    {id: 2, task : 'Suppression d\'une tâche'},
    {id: 3, task : 'On check, mettre à jour la table'}
  ];

  toDoList: any[] = [];
  maxId: any;

  constructor(private todo: TodoService) {}

  ngOnInit(): void {
    this.todo.getTodo().subscribe({
      next: (data) => this.toDoList = data,
      error: (err) => console.error('Erreur API :', err)
    });
  }

  newToDo = '';

  onAddToDoClick() : void {
    this.maxId = (this.toDoList[this.toDoList.length-1].id) + 1;

    this.toDoList.push({userId: 1, id: this.maxId, title: this.newToDo, completed: false})

  }
  
}
