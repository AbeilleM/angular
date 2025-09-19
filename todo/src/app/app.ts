import { Component, inject, signal } from '@angular/core';
import { TodoService } from './todo/todo-service';
import { TodoList } from './todo/todo-list.component';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    TodoList
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

  toDoList = this.todoService.todos;
  filter = false;
  // todo: any;

  constructor(readonly todo: TodoService) {}

  // ngOnInit(): void {
  //   this.todo.getTodo().subscribe({
  //     next: (data) => {
  //       data.forEach(element => {
  //         element.dateCompleted  = element.completed ? new Date().toISOString().slice(0, 10) : null;
  //       });
  //       this.toDoList = data
  //     },
  //     error: (err) => console.error('Erreur API :', err)
  //   });
  // }

  ngOnInit() {
    this.subscription = this.todoService.getTodo().subscribe();
  }

  

  newToDo = '';
  dateFilter = null;

  search() : void {
    if (this.dateFilter) {
      this.filter = true;
    } else {
      this.filter = false
    }
  }

  onAddToDoClick() : void {
    // this.maxId = (this.toDoList[this.toDoList.length-1].id) + 1;

    // this.toDoList.push({userId: 1, id: this.maxId, title: this.newToDo, completed: false});

    this.todo.createTodo({userId: 1, title: this.newToDo, completed: false, dateCreation: new Date().toISOString().slice(0, 10), dateCompleted: null })

    console.log(this.toDoList());

  }

  getByIdTodo(id: number) : void {
    const test = this.todo.getTodoById(id);
    console.log(test);
  }
  
}
