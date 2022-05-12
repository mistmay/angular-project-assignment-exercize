## Esercizio 9
In questo esercizio eseguiremo del refactoring per migliorare la leggibilità e la riusabilità di alcune funzionalità sviluppate:

* Il componente **TodoPageComponent** contiene troppa logica, pertanto possiamo rifattorizzarlo spostando la sua logica all'interno del servizio **TodoFacadeService**, il quale si occuperà di richiamare ed effettuare la sottoscrizione ai metodi di **TodoRepositoryService** e di restituire la lista dei todo aggiornata
* Spostare all'interno di una direttiva la funzionalità che si occupa di effettuare lo "ZoomIn" del nome dell'eroe presente nel componente **HeroCardComponent**
* Spostare all'interno di un'altra direttiva la funzionalità che si occupa di effettuare l'evidenziazione delle abilità del supereroe presente nel componente **HeroCardComponent**

# ProjectAssignmentExercize

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
