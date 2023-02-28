# LibraryAppDemo
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Takeaways
- using `ng generate library <lib-name>` will output a new library in the `/projects` folder
- what is available to the **consumers** of that library is defined in `/projects/<lib-name>/src/public-api.ts`
- the path to the **compiled** version of the library is defined in the `paths` section of `/tsconfig.json`

#### Compiling Libraries
- To compile the library run `ng build <lib-name>`
- this outputs the compiled library in the `/dist` folder
- **caveat** - in order to see changes made to to library in the main project, you will need to run `ng build <lib-name>` 
    - **however** if you run `ng build <lib-name> --watch` rebuilding every time a change is made becomes unnecessary

## Resources

