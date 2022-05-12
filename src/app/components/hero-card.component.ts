import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroPhraseGeneratorService } from '../services/hero-phrase-generator.service';

@Component({
  selector: 'app-hero-card',
  template: `
    <div class="card bg-white shadow" [style.width.rem]="18">
      <img [src]="hero.imageUrl" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title fs-3 fw-bold" [ngStyle]="{'transform': transform}" (mouseenter)="transform = 'scale(1.05)'" (mouseleave)="transform = 'none'">{{hero.name}}</h5>
        <h5 class="fs-5 fw-bold mb-3" [style.textDecoration]="'underline'">Abilità</h5>
        <ul class="ms-4">
          <li *ngFor="let ability of hero.abilities" class="mb-1">
            <p class="card-text" [ngClass]="'hover-bg'">{{ability}}</p>
          </li>
        </ul>
        <button type="button" class="btn btn-primary w-100 mt-3" (click)="randomPhrase()">Listen to me!</button>
        <button type="button" class="btn btn-primary w-100 mt-2" (click)="goToTodo.emit(hero.id)">Go to Todo Page</button>
      </div>
    </div>
  `,
  styles: [`
  .card {
    .card-title {
      transition: 0.2s;
    }
  ul {
    list-style-type: circle;
  }
  .hover-bg {
    &:hover {
      background-color: yellow;
    }
  }
}
  `]
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Output() heroTalks: EventEmitter<string> = new EventEmitter<string>();
  @Output() goToTodo: EventEmitter<number> = new EventEmitter<number>();
  transform: 'none' | 'scale(1.05)' = 'none';

  constructor(private phraseGenerator: HeroPhraseGeneratorService) { }

  ngOnInit(): void {
  }

  randomPhrase(): void {
    this.heroTalks.emit(this.phraseGenerator.getRandomPhrase());
  }

}
