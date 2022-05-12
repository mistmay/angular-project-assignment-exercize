import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './views/hero-page.component';
import { NewHeroComponent } from './views/new-hero.component';
import { TodoPageComponent } from './views/todo-page.component';

const routes: Routes = [
  { path: 'hero', component: HeroPageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: 'new-hero', component: NewHeroComponent },
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: '**', redirectTo: 'hero' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
