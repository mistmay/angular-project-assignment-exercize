import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-form',
  template: `
    <div class="container p-2">
      <form class="bg-secondary w-100 rounded-3 p-3 d-flex flex-column align-items-center gap-3 mt-5" [formGroup]="form" (ngSubmit)="addTodo()">
        <h3 class="fs-3 fw-bold">New Todo</h3>
        <div class="w-100">
          <label for="title" class="mb-2">Title</label>
          <input type="text" id="title" name="title" class="w-100 rounded-3 p-1" formControlName="title">
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['title'].dirty && form.hasError('required', 'title')">Required</span>
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['title'].dirty && form.hasError('minlength', 'title')">At least 3 characters</span>
        </div>
        <div class="w-100">
          <label for="description" class="mb-2">Description</label>
          <textarea id="description" name="description" class="w-100 rounded-3 p-3" formControlName="description"></textarea>
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['description'].dirty && form.hasError('required', 'description')">Required</span>
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['description'].dirty && form.hasError('minlength', 'description')">At least 3 characters</span>
        </div>
        <button type="submit" class="btn btn-primary w-100 rounded-3" [disabled]="form.invalid">Add</button>
      </form>
    </div>
  `,
  styles: [
  ]
})
export class TodoFormComponent implements OnInit {
  @Output() newTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Input() length!: number;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      description: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  addTodo(): void {
    this.newTodo.emit({ ...this.form.value, done: false, createdAt: new Date() });
    this.form.reset();
  }

}
