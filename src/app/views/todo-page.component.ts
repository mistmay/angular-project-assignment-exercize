import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo';
import { TodoFacadeService } from '../services/todo-facade.service';

@Component({
  selector: 'app-todo-page',
  template: `
    <ng-container *ngIf="todoList && todoList.length > 0; else loading">
      <div class="d-flex align-items-center gap-3 mb-4 px-3">
        <label for="encrypt">Encryption activated:</label>
        <input type="checkbox" id="encrypt" name="encrypt" [(ngModel)]="isEncrypted">
      </div>
      <app-todo-list [todoList]="todoList" (updateTodo)="updateTodo($event)" (deleteTodo)="deleteTodo($event)" [isEncrypted]="isEncrypted"></app-todo-list>
      <app-todo-form [length]="todoList.length" (newTodo)="addTodo($event)"></app-todo-form>
      <a class="my-5 d-inline-block text-center w-100 btn btn-primary" routerLink="hero">Go to Hero Page</a>
    </ng-container>
    <ng-template #loading>
      <p>{{loadingMessage}}</p>
    </ng-template>
  `
})
export class TodoPageComponent implements OnInit, OnDestroy {
  todoList!: Todo[];
  subscription!: Subscription;
  loadingMessage: string = 'Loading';
  isEncrypted: boolean = true;

  constructor(private listService: TodoFacadeService) { }

  ngOnInit(): void {
    this.listService.updateList();
    this.subscribe();
  }

  subscribe(): void {
    this.subscription = this.listService.getList()
      .subscribe((res: Todo[]) => {
        this.todoList = res;
        this.loadingMessage = 'No Todo in List. Please Add One';
      });
  }

  updateTodo(todo: Todo): void {
    this.listService.updateTodo(todo);
  }

  addTodo(todo: Todo): void {
    this.listService.addTodo(todo);
  }

  deleteTodo(id: number): void {
    this.listService.deleteTodo(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
