# Portforlio-Ng

- Portfolio design using angular.
- Backend collaboration using firebase.

    # Setups

    - When global declarative not working, (-g @angular/cli), On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following.

        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

    - Install Jquery, Bootstrap : npm install jquery --save,  npm install bootstrap and include the nodemodules path scripts, styles in angular.json to globalize. Now (import * as $ from jquery).

    # Font-awesome
    - Inside Angular project use cmd: npm install @fortawesome/angular-fontawesome@<version>
            npm install @fortawesome/fontawesome-svg-core
            npm install @fortawesome/free-brands-svg-icons
            npm install @fortawesome/free-regular-svg-icons
            npm install @fortawesome/free-solid-svg-icons

    - Or we can use ng add @fortawesome/angular-fontawesome
    - Include declararion of FontAwesomeModule in module.ts.
    - Create variable in component with the font class that needed to be printed in the component.
        like import { faCoffee } from '@fortawesome/free-solid-svg-icons'; faCoffee = faCoffee;
    - Use in HTML <fa-icon [icon]="faCoffee"></fa-icon>.
    
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
- Create component new directory inside app folder with name : ng generate component COMPONENTNAME
    - ng generate --help can be used to get command details.

- Create service with refer to an exist directory inside app folder with name : ng generate service DIRName/SERVICENAME

- Command to create module - ng generate module MODULENAME,


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

- @Ngmodule decorator in module files.
- Browsermodule import is important in module.ts.
- Bootstrap needed to be declared in root module , module.ts.
- We can give inline template and styles if needed in some cases. (Using template, styles in component decorator)
- One component can use in other component if we declare both in same module.
- For interpolation ie, {{}}, class variable should be public / protected.
- ng-container is a special tag which used to check conditions and place the things inside it in DOM. ng-container will not be available in DOM.
- If we have a complex component, it should be splitted inaccordance feature/ section, as smaller components. And include the smaller components in the current parent component.

- If multiple service class dependend each other on constructor of each class, we can't create an instance of the service class with this complexity. So the angular uses dependency injection, which picks the service class instance from a Service container.
- The ngFor loop can associate with object using 'keyvalue' pipe to generate value, key.
    # Template Reference Variable
    - The #var is format used inside the HTML element tag, to get reference to the same element in other HTML element. eg: <p #skillitem> is get used in <div (click)= "skillClick(skillitem.innerHTML)">.
    - On the parent HTML inside child selector tag (clickOnSkill)= "skillClick($event)", we use magic object $event will contains the details of event.
    - If data needed to pass to top parent 
# Binding

- Shorthand use of variable toggle in event binding, (click) = "skillShow = !skillShow". 
- Property binding for elements, directives etc.. , ie, "[]=variable", the property defined in square brackets.
- The style binding done like [style.display = "variable".
- Event binding, (click) = "handleClick()", event should be in () and the function is called handleClick().
- Two way binding, FormsModule in app.module.ts or module and use [(ngModel) = "variable", ngModel directive will help binding with property and event (two way).

# Input/Output decorator (parent-child/ child-parent)
-    # Parent-child binding (@Input)
    - The variable data of parent can be tranferred.
    - When a child component selector in parrent, we can pass data from parent to child, ie, inside 
    <selector [childVariable] = "parentVariable"></selector>.
    - We will add binding using [], in child selector tag.
    - Use decorator @Input() variable = null; , in the child component.

    # Child-Parent data emit (@Output)
    - The @Output decorator is used with variable = new EventEmitter<type>().
    - The event emitter is used to pass data to upper parents.
    - Then if some value needed to be passed variable.emit("value"), is called.
    - In the parent component html, (clickOnSkill) = "skillClick($event)" 
    
# Ng-Container
- ng-container is a special tag which used to check conditions and place the things inside it in DOM. ng-container will not be available in DOM.
# Directives

- Component(Using with template ), Attribute(Change appearance and behaviour of components, elements, directives etc..), Structural Directive(DOM manipulation).

    # Built-in Atrribute Directives
    - NgClass
    - NgStyle
    - NgModel : Used for two way bindings

    # Built-in Structural Directives
    - NgIf : If-else condition
    - NgFor : Like for loop, *ngFor = "let item if items".
    - NgSwitch

# Pipes
- Add pipes ("|" is pipe sign) to an interpolation, (acts like a decorator), ie, {{variable | uppercase}}
- It is needed to declare once in an applications and can used globally in any components.

    # Custom Pipes
    - PipeClass that implements the PipeTransform interface class
    - We have the decorator @Pipe({name: 'name'}), with name metadata for pipe.
    - The PipeTransform interface method called transform is used in our PipeClass to implement the string tranformations logic using pipe.
    - We should include this class in module declarations, to make it available globally.
    - The we can use {{variable | mypipe}} or in multiple pipe {{variable | uppercase | mypipe}}
    # Inbuilt PipeTranforms
    - AsyncPipe:  (implement async/ observable,  When the reference of the expression changes, the async pipe automatically unsubscribes from the old Observable or Promise and subscribes to the new one.)
    - JsonPipe: (Converts object to json.)
    - TitleCasePipe: (Coverts the each word into title case format)
    - UpperCasePipe/LowerCasePipe: (Upper/Lower casing of words)
    - CurrencyPipe: (Convert into the different currency formats.)
    - DatePipe: (Date formatting)
    - SlicePipe: (Slicing arrays)

# LifeCycle Hooks
- The angular component lifecycle starts when object instance of component is created by the angular, continues with the data bound changed detection, until the angular destroys component instance.
- ngOnChange() - When something is changed 
- ngOnInit() - On init of the component
- ngDoCheck() - Developer's custom change detection.
- ngAfterContentInit() - After component content intialise
- ngAfterContentChecked() - After every check of component content.
- ngAfterViewInit() - After the views of a component are initialized.
- ngAfterViewChecked() - After every check of the views of a component.
- ngDestroy() - Just before the directive is destroyed. The component class should also implement OnDestroy, Oninit(along with this) to implement ngOnDestroy.

# Using Observables to pass values
- Observables provide support for passing messages between parts of your application. They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.

# Components
- The components should be optimised in such a way like the UI representation, its bindings should be the only job.
# Services 
- It is a specially dedicated class to do something relevant, like hits REST endpoints etc..
- It is also used to implement the bussiness logics for the components.
- A service can depends on other service.
- Command - ng generate service skills/skill-service
- The decorator @Injectable, used to declare service. And with metadata named providedIn : 'root' , means this service available in root level, globally throughout the application.
- We can make it lazy load component using 'any', and module specific by add module classname 'ModuleClass'. Along with the service class mentioned in module @NgModule decorator, provider array.
    # Dependency Injection
    - To use the services in component we use dependency injection. Where the service is injected in the component.
    - Inside component constructor argument, ie, constructor(private skillService: SkillService)
    - Thus a private object instance of service class will available in the component.
    - If multiple service class dependend each other on constructor of each class, we can't create an instance of the service class becuase it is complex. So we use dependency injection, since Angular will take care of all service class instance creation, initialisations etc..

- If the providedIn is not maded as 'root', along with the service class mentioned in module @NgModule decorator, provider array.

    # State Management by Services
    - We can create a global service class to implement, the state of a component items management using a service.
    - Thus maintain the state of a specific component.

# Custom module
- The custom modules can be created to modularize a functional part, eg: skills in this app, can be contains in a skill module.
- Command - ng generate module skills, will create a module in corresponding directory.
- The created module can be registered in the core app.module.ts.
- We can register all the components specific to the new module, in the module declarations.
    # Make components available in root module
    - The components can be include in the exports of the module to make it available in other modules.

# Angular Routing
- We can create routing module through CLI, or through commands in CLI : ng new routing-app --routing --defaults
- If routing is already opted when created app through CLI, in app.module.ts we will have declarations of 'AppRoutingModule' / any routing module we have defined.
- In the created routing module we have to import the RouterModule with routes and export the RouterModule so that it can be used widely in application.
- We can define the routes, { path: 'first-component', component: FirstComponent } in this format as array.
- The 'title' attribute shows the page title.
- In html of nav 'routerLink' attribute can be used to pass the ref link, 'routerLinkActive' make it active on not.
- The angular tag <router-outlet></router-outlet> will loads the components inside it according to routes.
    # Wildcard
    - Angular have wildcard routing '{ path: '**', component: <component-name> }' to show custom 404 page etc...
    - All the invalid routes will loads this page

# Tail-wind css
- Do run the cmds: npm install -D tailwindcss postcss autoprefixer
                    npx tailwindcss init
- Refer to the doc: https://tailwindcss.com/docs/guides/angular
- Like bootstrap we can include the classes.