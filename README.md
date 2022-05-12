## Esercizio 6
Ogni buon supereroe ha sempre con sè una lista dei compiti da svolgere durante la giornata. Con questo sesto esercizio, infatti, inizieremo la costruzione di una todo list per consentire all'eroe di tenere traccia delle azioni da svolgere. Per la costruzione della todo list verranno fornite delle API da richiamare per eseguire delle operazioni CRUD sulla lista dei todo. In questa prima parte dell'esercizio occorrerà svolgere le seguenti operazioni:

* Creare il tipo **Todo** con le seguenti proprietà:
  * id (**number**)
  * title (**string**)
  * description (**string**)
  * done (**boolean**)
  * createdAt (**number**)
* Creare il servizio **TodoRepositoryService** per le operazioni CRUD sui todo
* Il servizio **TodoRepositoryService** dovrà contenere i seguenti metodi:
  * getAll() - per recuperare l'intera lista dei todo
  * getById(id: number) - per recuperare un todo tramite id
  * create(todo: Todo) - per creare un nuovo todo
  * update(todo: Todo) - per aggiornare i dati di un todo
  * deleteById(id: number) - per cancellare un todo tramite id
* Ogni metodo di **TodoRepositoryService** dovrà richiamare un endpoint specifico:
  * getAll() - http://localhost:3000/todos [GET]
  * getById(id: number) - http://localhost:3000/todos/:id [GET]
  * create(todo: Todo) - http://localhost:3000/todos [POST]
  * update(todo: Todo) - http://localhost:3000/todos/:id [PUT]
  * deleteById(id: number) - http://localhost:3000/todos/:id [DELETE]

**ATTENZIONE:** Prima di utilizzare le API è necessario avviare il JSON Server lanciando nella root di progetto il seguente comando: `npm run json:server`

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
