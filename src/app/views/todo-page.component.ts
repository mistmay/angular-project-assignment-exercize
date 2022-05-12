import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-page',
  template: `
    <app-todo-list [todoList]="todoList"></app-todo-list>
  `,
  styles: [
  ]
})
export class TodoPageComponent implements OnInit {
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Salvare il gattino della signora Linda',
      description: "Il gattino si è arrampicato sull'albero e non vuole più scendere",
      done: false,
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Aprire la porta di casa del signor Mario',
      description: "Il signor Mario ha chiuso distrattamente la porta di casa lasciando le chiavi dentro",
      done: false,
      createdAt: new Date()
    },
    {
      id: 3,
      title: "Thomas è in ritardo per l'appuntamento",
      description: "Thomas deve andare ad un appuntamento alle 10. Il dormiglione però si è svegliato alle 09:50",
      done: true,
      createdAt: new Date()
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
