import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <div class="d-flex flex-column align-items-center gap-4 container">
      <app-todo-list-item
        *ngFor="let todo of todoList" [todo]="todo"
        class="w-100"
        (updateTodo)="updateTodo.emit($event)"
        (deleteTodo)="deleteTodo.emit($event)"
        [isEncrypted]="isEncrypted">
      </app-todo-list-item>
    </div>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: Todo[];
  @Input() isEncrypted!: boolean;
  @Output() updateTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
