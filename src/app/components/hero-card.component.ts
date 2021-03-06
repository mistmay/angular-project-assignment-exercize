import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroPhraseGeneratorService } from '../services/hero-phrase-generator.service';

@Component({
  selector: 'app-hero-card',
  template: `
    <div class="card bg-white shadow" [style.width.rem]="18">
      <img [src]="hero.imageUrl" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title fs-3 fw-bold" appZoomIn>{{hero.name}}</h5>
        <h5 class="fs-5 fw-bold mb-3" [style.textDecoration]="'underline'">Abilità</h5>
        <ul class="ms-4">
          <li *ngFor="let ability of hero.abilities" class="mb-1">
            <p class="card-text" appHoverLi>{{ability}}</p>
          </li>
        </ul>
        <button type="button" class="btn btn-primary w-100 mt-3" (click)="randomPhrase()" *ngIf="showBtn">Listen to me!</button>
        <button type="button" class="btn btn-primary w-100 mt-2" (click)="goToTodo.emit(hero.id)" *ngIf="showBtn">Go to Todo Page</button>
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
}
  `]
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Hero;
  @Input() showBtn!: boolean;
  @Output() heroTalks: EventEmitter<string> = new EventEmitter<string>();
  @Output() goToTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor(private phraseGenerator: HeroPhraseGeneratorService) { }

  ngOnInit(): void {
  }

  randomPhrase(): void {
    this.heroTalks.emit(this.phraseGenerator.getRandomPhrase());
  }

}
