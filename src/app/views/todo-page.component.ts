import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoRepositoryService } from '../services/todo-repository.service';

@Component({
  selector: 'app-todo-page',
  template: `
    <ng-container *ngIf="todoList; else loading">
      <app-todo-list [todoList]="todoList" (updateTodo)="updateTodo($event)" (deleteTodo)="deleteTodo($event)"></app-todo-list>
      <app-todo-form [length]="todoList.length" (newTodo)="addTodo($event)"></app-todo-form>
    </ng-container>
    <ng-template #loading>
      <p>Loading</p>
    </ng-template>
  `,
  styles: [
  ]
})
export class TodoPageComponent implements OnInit, OnDestroy {
  todoList!: Todo[];
  subscriptions: Subscription[] = [];

  constructor(private api: TodoRepositoryService) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    this.subscriptions.push(
      this.api.getAll()
        .subscribe((res: Todo[]) => {
          this.todoList = res;
        })
    );
  }

  updateTodo(todo: Todo): void {
    this.subscriptions.push(
      this.api.update(todo)
        .subscribe((res: Todo) => {
          this.getTodo();
        })
    );
  }

  addTodo(todo: Todo): void {
    this.subscriptions.push(
      this.api.create(todo)
        .subscribe((res: Todo) => {
          this.getTodo();
        })
    );
  }

  deleteTodo(id: number): void {
    this.subscriptions.push(
      this.api.deleteById(id)
        .subscribe((res: Todo) => {
          this.getTodo();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
