import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main class="d-flex flex-column align-items-center gap-3 bg-light min-vh-100">
    <h1 class="fs-1 fw-bold">Born to Be Hero</h1>
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent { }
