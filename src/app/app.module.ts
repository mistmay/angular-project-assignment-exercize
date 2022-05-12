import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroCardComponent } from './components/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroPageComponent } from './views/hero-page.component';
import { TodoPageComponent } from './views/todo-page.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroPageComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
