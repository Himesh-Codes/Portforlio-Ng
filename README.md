# Portforlio-Ng

- Portfolio design using angular.
- Backend collaboration using firebase.

    # Setups

    - When global declarative not working, (-g @angular/cli), On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following.

        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
# Commands

- Create new app : ng new APP-NAME 
    - Ask for routing to enable routing (Y)
    - Select style - CSS
    - Install the npm packages automatically. And included Readme, .gitignore etc..
    - package.json have the details of ng command scripts, like ng serve, ng build etc..
- Get help : ng --help
- Serve the app localhost: ng serve --open / --o (open/o used to open in default browser)
    - We can use npm start also if in case ng is not global.
    - http://localhost:4200/ will be URL , 4200 will be the port.
    - To change port, in angular.json, Add “port”:3001(or any other number) property inside options.
    - Either use: ng serve --port 8000


# Files Walkthrough

Angular is a modular framework.
- tsconfig.json, tsconfig.app.json, tsconfig.spec.json : typescript, app ts config, test ts config respectively.
- package.json: app dependencies adding, dev dependencies etc..
- package-lock.json: Log of locked versions of packages currently installed.
- karma.conf.js : testing related configs.
- angular.json: Angular CLI instructions for generating files, all CLI commands are instructed in this file.
- editorconfig: The editor based file formats, usefull if different devs work on single projects.
- src/ - Contains app, assets, environments etc..
    - main.ts : Is the root file. (Checks environment, app module load etc..)
    - environment.ts, environment-pro.ts : Used for the configuration in different dev, prod env, eg: for debug.
    - app/ app.module.ts : App root module, use @NgModule decorator to add some metadata(describe the role of component, module etc..)
    - app/ app-component.ts : Component class consist of the components used, selector (id,class,tag in index.html), templateUrl (html), styleUrls (array of css style sheets)
    - app-routing.module.ts: Routing system
    - app/ app-component-spec.ts: Testing purposes.
    - index.html: Base file loads in UI. That contains all the components.
- Every angular app should have root module (default app.module.ts), it is the file that only have <b>bootstrap</b> to declare the first ever component in application.

# Important points
