import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList = [
    {title: 'Sprint Tasks', completed: false},
    {title: 'Call Marketing Team', completed: false},
    {title: 'Complete Survey', completed: false},
    {title: 'Submit Timesheets', completed: false},
    {title: 'Grocery Shopping', completed: false},
  ];
  reminderList = [
    {title: 'Drink Water', completed: false},
    {title: 'Blink your eye', completed: false},
    {title: 'Go for a quick walk', completed: false}
  ];
  toggleTodo = false;
  toggleReminder = false;
  toggleBubble = false;

  openBubble() {
    this.toggleBubble = !this.toggleBubble;
  }

  openTodo() {
    this.toggleTodo = !this.toggleTodo;
  }

  openReminder() {
    this.toggleReminder = !this.toggleReminder;
  }

  completeItem(item) {
    item.completed = !item.completed;
  }
}
