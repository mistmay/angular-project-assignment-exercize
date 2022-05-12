import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-card',
  template: `
    <div class="card" [style.width.rem]="18">
    <img [src]="hero.imageUrl" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title fs-3 fw-bold">{{hero.name}}</h5>
      <h5 class="fs-5 fw-bold mb-3" [style.textDecoration]="'underline'">Abilità</h5>
      <ul class="ms-4">
        <li *ngFor="let ability of hero.abilities" class="mb-1">
          <p class="card-text">{{ability}}</p>
        </li>
      </ul>
    </div>
  </div>
  `,
  styles: [`
  .card {
  ul {
    list-style-type: circle;
  }
}
  `]
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
