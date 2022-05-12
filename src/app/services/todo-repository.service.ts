import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:3000/todos/${id}`);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  deleteById(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todos/${id}`);
  }

}
