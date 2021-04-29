import {Component, OnInit} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
  openSnackBar;
  pomodoro;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    setInterval(() => {
      this.openSnackBar = this.snackBar.open('Drink Water', 'Done!', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }, 20000);
    setInterval(() => {
      this.pomodoro = this.snackBar.open('You have 25 minutes to work', '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }, 50000);
    clearInterval(this.openSnackBar);
    clearInterval(this.pomodoro);

  }

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
