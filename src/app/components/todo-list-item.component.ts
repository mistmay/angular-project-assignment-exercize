import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list-item',
  template: `
    <div class="bg-white rounded-3 w-100 py-4 px-3 d-flex flex-column gap-3 shadow">
      <div class="d-flex align-items-center gap-2">
        <input type="checkbox" name="done" [(ngModel)]="todo.done" (change)="updateTodo.emit(todo)">
        <h3 class="fs-4 fw-bold">{{todo.title}}</h3>
        <button type="button" class="btn btn-danger d-flex justify-content-center align-items-center" (click)="deleteTodo.emit(todo.id)">
          <img src="../../assets/svg/trash.svg">
        </button>
      </div>
      <p>{{todo.description}}</p>
      <small>{{todo.createdAt | date:'dd/MM/yyyy hh:mm'}}</small>
    </div>
  `,
  styles: [`
  img {
    filter: invert(100%) sepia(82%) saturate(2%) hue-rotate(27deg) brightness(112%) contrast(101%);
  }
  `]
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
