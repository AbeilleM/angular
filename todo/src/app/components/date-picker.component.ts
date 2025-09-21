import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { TodoService } from "../todo/todo.service";
import { Todo } from "../todo/todo";

@Component({
    selector: 'app-date-picker',
    imports: [
      FormsModule
    ],
    standalone: true,
    templateUrl: './html/date-picker.html',
    styleUrl: '../app.css',
})
export class DatePicker {
    constructor() {}

    @Output() dateChange = new EventEmitter<{date: string, isChecked: boolean}>();

    selectedDate: string = new Date().toISOString().slice(0, 10);
    onChecked: boolean = false;

    onDateChange(event: string) {
      this.selectedDate = event;
      this.dateChange.emit({
        date: event,
        isChecked: this.onChecked
      });

    }

}