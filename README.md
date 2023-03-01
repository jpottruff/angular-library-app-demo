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
## Publishing artifacats (locally w/ Verdaccio)

### Publish
_Assuming Verdaccio is running and you have created a user_

```bash
# Build your library
ng build <lib-name>

# Change into the output folder
cd dist/<lib-name>

# Publish to Verdaccio (will make .tgz and publish)
npm publish --registry http://localhost:4873/
```
### Install
1. Ensure you have an `.npmrc` with the location of the Verdaccio repository
   
    ```
    registry=http://localhost:4873/
    ```

1. You can go to the Verdacio server and find the package and copy the command to install it
    
    `npm install <lib-name>`

### Other Useful Commands
```bash
# Add a user
npm adduser --registry http://localhost:4873/

# Check if you are logged in
npm whoami --registry http://localhost:4873/

# Publish (run from library output folder)
npm publish --registry http://localhost:4873/
```
## Takeaways
- Verdaccio is an NPM proxy - if the package does not exist on Verdaccion, it will reach out to the official NPM repo



## General Resources
[Angular Libraries Playlist](https://www.youtube.com/playlist?list=PLhzRPVQgdM8Vlty5X7d7cDTuW6QcCMaB8) from [Code Shots With Profanis](https://www.youtube.com/@CodeShotsWithProfanis/featured) 

[Github Issue (Paths Fix)](https://github.com/angular/angular/issues/35586#issuecomment-630774572)

[Verdaccio Docker Compose](https://verdaccio.org/docs/docker#using-docker-compose)
[Verdaccio Config](https://github.com/verdaccio/verdaccio/blob/5.x/conf/docker.yaml)

# Verdaccio Setup
1. Run `docker compose up -d` in the directory with the `docker-compose` file

    NOTE: If you are **bind mounting**, ensure the correct permissions have been set on the **host linux system** for `./storage`, `./config`, and `./plugins` 
    
    _(see troubleshooting)_

    ```bash
    sudo chown -R 10001:65533 ./storage
    
    sudo chown -R 10001:65533 ./config
    
    sudo chown -R 10001:65533 ./plugins
    ```


### Verdaccio Troubleshooting
**Add user permissions issues**
- [Github Issue](https://github.com/verdaccio/verdaccio/issues/1379)
- [Github Comment](https://github.com/verdaccio/verdaccio/issues/1324#issuecomment-499429528)
- [Docs](https://verdaccio.org/docs/docker/)
    - see: `sudo chown -R 10001:65533 /path/for/verdaccio`