import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoService } from './todo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './app.html',
  template: `
    <ul>
    @for (todo of listExample; track todo.id) {
      <li>{{ todo.task }}</li>
    }
    </ul>

    <h1>To Do List</h1>
    
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
    {id: 2, task : 'Créer le service TodoService'}
  ];

  toDoList: any[] = [];

  constructor(private todo: TodoService) {}

  ngOnInit(): void {
    this.todo.getTodo().subscribe({
      next: (data) => this.toDoList = data,
      error: (err) => console.error('Erreur API :', err)
    });
  }
  
}
