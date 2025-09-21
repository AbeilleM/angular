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

    dateOneDayAgo: string = this.getDateString(-1);
    dateTwoDaysAgo: string = this.getDateString(-2);
    dateThreeDaysAgo: string = this.getDateString(-3);
    dateOneDayAfter: string = this.getDateString(1);
    dateTwoDayAfter: string = this.getDateString(2);
    dateThreeDayAfter: string = this.getDateString(3);


    getDateString(offsetDays: number): string {
      const date = new Date(this.selectedDate);
      date.setDate(date.getDate() + offsetDays);
      return date.toISOString().slice(0, 10);
    }
    
    onDateChange(event: string) {
      this.selectedDate = event;
      this.dateChange.emit({
        date: event,
        isChecked: this.onChecked
      });

      this.dateOneDayAgo = this.getDateString(-1);
      this.dateTwoDaysAgo = this.getDateString(-2);
      this.dateThreeDaysAgo = this.getDateString(-3);
      this.dateOneDayAfter = this.getDateString(1);
      this.dateTwoDayAfter = this.getDateString(2);
      this.dateThreeDayAfter = this.getDateString(3);

    }

    onCheckedChange(event: boolean) {
      const isChecked = event;
      this.onChecked = isChecked;
      this.dateChange.emit({ date: this.selectedDate, isChecked: isChecked });
    }

    changeDate(date: string) {
      this.onDateChange(date);

    }

}