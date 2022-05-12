import { Injectable } from '@angular/core';
import { TodoRepositoryService } from './todo-repository.service';
import { Todo } from '../models/todo';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {
  todoListObservable: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  subscription!: Subscription;

  constructor(private api: TodoRepositoryService) { }

  getList(): Observable<Todo[]> {
    return this.todoListObservable.asObservable();
  }

  updateList(): void {
    this.subscription = this.api.getAll()
      .subscribe((res: Todo[]) => {
        this.todoListObservable.next(res);
        this.subscription.unsubscribe();
      });
  }

  updateTodo(todo: Todo): void {
    this.subscription = this.api.update(todo)
      .subscribe((res: Todo) => {
        this.subscription.unsubscribe();
        this.updateList();
      });
  }

  addTodo(todo: Todo): void {
    this.subscription = this.api.create(todo)
      .subscribe((res: Todo) => {
        this.subscription.unsubscribe();
        this.updateList();
      });
  }

  deleteTodo(id: number): void {
    this.subscription = this.api.deleteById(id)
      .subscribe((res: Todo) => {
        this.subscription.unsubscribe();
        this.updateList();
      });
  }
}
