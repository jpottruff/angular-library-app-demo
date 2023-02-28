# LibraryAppDemo
## Development server
**Main App** 
`ng serve` from project root of workspace-a 
- http://localhost:4200/

**Dog App**
`ng serve dog-app --port 4201` from project root of workspace-a
- http://localhost:4201/

**Cat App**
`ng serve --port 4202` from project root of cat-app
- http://localhost:4202/


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
- to use the library in the **new app**, import it in `/projects/<app-name>/src/app/app.module` _(eg. the same as you did for the **main app**)_

- using `ng new <app-name>` will output a new application in the **root** folder with the same structure as an angular application `/<app-name>`
- to use the library in the **new workspace app**
    - import it in `/projects/<app-name>/src/app/app.module` _(eg. the same as you did for the **main app**)_
    - add the following to your `tsconfig.json` in the new workspace app
        ```json
        "paths": {
            // Fixes error indicates that somehow there are two copies of Ivy in there. 
            // This was due to TypeScript's module resolution approach - it looks for node_modules by traversing up the directory of file being compiled.
            // https://github.com/angular/angular/issues/35586#issuecomment-630774572
            "@angular/*": [
                "./node_modules/@angular/*"
            ],
            // `general-components` is the **alias** we can use to import the library
            "general-components": [
                "../workspace-a/dist/general-components"
            ]
        },
        ```

## Resources
[Angular Libraries Playlist](https://www.youtube.com/playlist?list=PLhzRPVQgdM8Vlty5X7d7cDTuW6QcCMaB8) from [Code Shots With Profanis](https://www.youtube.com/@CodeShotsWithProfanis/featured) 

[Github Issue](https://github.com/angular/angular/issues/35586#issuecomment-630774572)
