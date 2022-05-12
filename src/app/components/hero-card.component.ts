import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
      <button type="button" class="btn btn-primary w-100 mt-3" (click)="randomPhrase()">Listen to me!</button>
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
  @Output() heroTalks: EventEmitter<string> = new EventEmitter<string>();
  phrases: string[] = [
    'I will catch all the criminals',
    'I will protect you',
    'I am stronger then you',
    'You are safe because of me',
    'You will never know about my identity',
    'I am cool'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  randomPhrase(): void {
    const random: number = Math.floor(Math.random() * (this.phrases.length));
    this.heroTalks.emit(this.phrases[random]);
  }

}
