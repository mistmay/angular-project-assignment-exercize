import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroPageComponent } from './views/hero-page.component';
import { TodoPageComponent } from './views/todo-page.component';

const routes: Routes = [
  { path: 'hero', component: HeroPageComponent },
  { path: 'todo', component: TodoPageComponent },
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  { path: '**', redirectTo: 'hero' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
