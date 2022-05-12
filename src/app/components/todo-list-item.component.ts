import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list-item',
  template: `
    <div class="bg-white rounded-3 w-100 py-4 px-3 d-flex flex-column gap-3 shadow">
      <div class="d-flex align-items-center gap-2">
        <input type="checkbox" name="done" [(ngModel)]="todo.done">
        <h3 class="fs-4 fw-bold">{{todo.title}}</h3>
      </div>
      <p>{{todo.description}}</p>
      <small>{{todo.createdAt | date:'dd/MM/yyyy hh:mm'}}</small>
    </div>
  `,
  styles: [
  ]
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
