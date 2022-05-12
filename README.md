## Esercizio 8
In questo ottavo esercizio proseguiremo con lo sviluppo della todo list andando a implementare le azioni CRUD all'interno della nostra interfaccia grafica:

* Creare il componente **TodoFormComponent**, il quale conterrà un campo per il titolo, uno per la descrizione e un pulsante che, una volta cliccato, consentirà la creazione di un nuovo todo. Questo componente dovrà essere innestato all'interno di **TodoPageComponent**, il quale riceverà l'evento del submit del form ed eseguirà la chiamata al metodo **create** del servizio **TodoRepositoryService**
* Al click della checkbox dovrà partire un evento custom al componente _parent_, il quale si occuperà di effettuare la chiamata al repository per aggiornare il campo _done_ del todo
* Aggiungere alla fine del titolo di ciascun todo un pulsante con l'icona del cestino che, una volta cliccato, genererà l'evento custom al componente _parent_ per la cancellazione del todo

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
