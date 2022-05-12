## Esercizio 2
In questo secondo esercizio andremo a riorganizzare il codice scritto in precedenza tramite la creazione del componente Stateless **HeroCardComponent**. Questo componente riceverà tre proprietà in input dal componente padre e li mostrerà all'interno della card. Le proprietà in input che il componente accetterà sono le stesse definite all'interno di **AppComponent**:

* Un titolo con il nome dell'eroe
* Un immagine dell'eroe
* La lista delle abilità e dei super poteri che l'eroe possiede

Infine andremo a rifattorizzare ulteriormente il codice creando il tipo **Hero**, il quale sarà formato dalle seguenti proprietà:

* id (**number**)
* name (**string**)
* imageUrl (**string**)
* abilities (**string[]**)

Per concludere sostituiremo le tre proprietà di input del componente **HeroCardComponent** con un'unica proprietà di tipo **Hero**.

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
