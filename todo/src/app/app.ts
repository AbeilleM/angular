import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  `,    
  styleUrl: './app.css'
})
export class App {
  listExample = [{id: 0, task : 'Mettre à jour le CSS'}, {id: 1, task : 'Faire une vraie interface TODO'}, {id: 2, task : 'Créer le service TodoService'}];
}
