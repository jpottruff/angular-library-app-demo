# LibraryAppDemo
## Development server
**Main App** 
`ng serve` from project root 
- http://localhost:4200/

**Dog App**
`ng serve dog-app --port 4201` from project root
- http://localhost:4201/


## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Libraries
### Takeaways
- using `ng generate library <lib-name>` will output a new library in the `/projects` folder
- what is available to the **consumers** of that library is defined in `/projects/<lib-name>/src/public-api.ts`
- the path to the **compiled** version of the library is defined in the `paths` section of `/tsconfig.json`
- to use the library in the **main app**, import it in `app.module`

#### Compiling Libraries
- To compile the library run `ng build <lib-name>`
- this outputs the compiled library in the `/dist` folder
- **caveat** - in order to see changes made to to library in the main project, you will need to run `ng build <lib-name>` 
    - **however** if you run `ng build <lib-name> --watch` rebuilding every time a change is made becomes unnecessary

## Applications
### Takeaways
- using `ng generate application <app-name>` will output a new application in the `/projects` folder with the same structure as an angular application 
- to use the library in the **new app**, import it in `/projects/<app-name>/src/app/app.module` _(eg. the same as you did for the **main app**)

- using `ng new <app-name>` will output a new application in the **root** folder with the same structure as an angular application `/<app-name>`

## Resources

