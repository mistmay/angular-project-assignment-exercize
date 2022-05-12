## Esercizio 7
In questo esercizio proseguiremo con lo sviluppo della nostra todo list attraverso la realizzazione di tre componenti: **TodoPageComponent**, **TodoListComponent** e **TodoListItemComponent**.

Le operazioni da eseguire sono le seguenti:

* Creare il componente **TodoPageComponent**, il quale si occuperà di mostrare la lista e il form per l'aggiunta dei nuovi todo
* Creare il componente **TodoListComponent**, il quale accetterà come proprietà in input un array di **Todo** e li mostrerà a schermo sotto forma di elenco
* Creare il componente **TodoListItemComponent** per il singolo todo dell'elenco. Questo componente accetterà in input un **Todo** e lo mostrerà a schermo sotto forma di card. La card dovrà contenere le seguenti informazioni:
  * Titolo
  * Descrizione
  * Data creazione
  * Checkbox che consentirà di flaggare il todo una volta completato
* Creare una nuova rotta per accedere alla pagina contenente la lista dei todo. Per aggiungere una nuova rotta occorrerà utilizzare il modulo **RouterModule** di Angular
* Rifattorizzare il componente **AppComponent** affinché utilizzi la direttiva **RouterOutlet** per consentire la navigazione dei componenti. Di conseguenza occorrerà creare il componente **HeroPageComponent** e la relativa rotta per consentire la navigazione tra la lista dei todo e la card dell'eroe
* Infine, aggiungere un pulsante all'interno del componente **HeroCardComponent** che, una volta cliccato, dovrà indirizzare l'utente alla pagina contenente la lista dei todo.
**N.B:** il componente **HeroCardComponent** è **Stateless**, pertanto bisognerà gestire il reindirizzamento dell'utente tramite un evento custom

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
