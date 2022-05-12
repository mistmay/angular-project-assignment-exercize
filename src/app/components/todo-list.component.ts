import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <div class="d-flex flex-column align-items-center gap-4 container">
      <app-todo-list-item *ngFor="let todo of todoList" [todo]="todo" class="w-100"></app-todo-list-item>
    </div>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
