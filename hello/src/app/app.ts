import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Voici un {{ title }}</h1>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'test';
}
