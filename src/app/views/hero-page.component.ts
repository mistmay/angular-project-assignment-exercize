import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  template: `
  <app-hero-card
    [hero]="{id: 1, name: 'Batman', imageUrl: '../../assets/img/batman.webp', abilities: ['Intimidazione', 'Interrogatorio', 'Intelletto', 'Arti Marziali', 'Armi tecnologiche']}" 
    (heroTalks)="showAlert($event)"
    (goToTodo)="goToTodo($event)"
    [showBtn]="true">
  </app-hero-card>
  <a routerLink="/new-hero" class="btn btn-primary w-100 my-5">Create a Fake Hero</a>
  `
})
export class HeroPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showAlert(phrase: string): void {
    alert(phrase);
  }

  goToTodo(id: number): void {
    this.router.navigate(['todo']);
  }

}
