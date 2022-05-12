import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  template: `
    <div class="container p-2 d-flex flex-column align-items-center gap-5">
      <form class="bg-secondary p-5 rounded-3 d-flex flex-column align-items-center gap-4 w-100 text-center" [formGroup]="form" (ngSubmit)="newHero()">
        <h2 class="fs-2 fw-bold">Create New Hero</h2>
        <div class="w-100">
          <label for="name" class="mb-2 fw-bold">Name</label>
          <input type="text" id="name" name="name" class="w-100 rounded-3 p-3" formControlName="name">
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['name'].dirty && form.hasError('required', 'name')">Required</span>
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['name'].dirty && form.hasError('minlength', 'name')">At least 3 characters</span>
        </div>
        <div class="w-100">
          <label for="imageUrl" class="mb-2 fw-bold">Image URL</label>
          <input type="text" id="imageUrl" name="imageUrl" class="w-100 rounded-3 p-3" formControlName="imageUrl">
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['imageUrl'].dirty && form.hasError('required', 'imageUrl')">Required</span>
          <span class="text-white mt-2 d-inline-block" *ngIf="form.controls['imageUrl'].dirty && form.hasError('minlength', 'imageUrl')">At least 6 characters</span>
        </div>
        <div formArrayName="abilities" class="d-flex flex-column align-items-center gap-3 w-100">
          <h5 class="fs-5 fw-bold mb-3 align-self-start">Abilities</h5>
          <button class="btn btn-outline-dark border-0 fs-1 fw-bold py-0" (click)="addAbility()" type="button">+</button>
          <div *ngFor="let abilityForm of abilities.controls; let i = index">
            <div class="mb-3" [formGroupName]="i">
              <input type="text" formControlName="ability">
              <button class="btn btn-danger" type="button" (click)="deleteAbility(i)">X</button>
            </div>
          </div>
          <span class="text-white mt-2 d-inline-block" *ngIf="abilities.invalid">Please Enter at Least one ability of at least 3 characters</span>
        </div>
        <button type="submit" class="btn btn-primary w-100" [disabled]="form.invalid">Create Hero</button>
      </form>
      <app-hero-card [showBtn]="false" *ngIf="hero" [hero]="hero"></app-hero-card>
      <a routerLink="hero" class="btn btn-primary mb-5 w-100">Back To Real Hero Page</a>
    </div>
  `,
  styles: [`
  form {
    max-width: 450px;
  }
  `]
})
export class NewHeroComponent implements OnInit {
  hero!: Hero;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      imageUrl: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      abilities: this.formBuilder.array([], Validators.compose([Validators.required, Validators.minLength(1)]))
    });
  }

  get abilities(): FormArray {
    return this.form.controls['abilities'] as FormArray;
  }

  newAbility(): FormGroup {
    return this.formBuilder.group({
      ability: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  addAbility(): void {
    this.abilities.push(this.newAbility());
  }

  deleteAbility(index: number): void {
    this.abilities.removeAt(index);
  }

  newHero(): void {
    this.hero = {
      id: 0,
      name: this.form.value.name,
      imageUrl: this.form.value.imageUrl,
      abilities: this.form.value.abilities.map((element: any) => element.ability)
    };
    this.form.reset();
    this.abilities.controls = [];
  }

}
