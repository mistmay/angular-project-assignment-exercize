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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './components/todo-form.component';
import { ZoomInDirective } from './directives/zoom-in.directive';
import { HoverLiDirective } from './directives/hover-li.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroCardComponent,
    HeroPageComponent,
    TodoPageComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    ZoomInDirective,
    HoverLiDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
