# Portforlio-Ng

- Portfolio design using angular.
- Backend collaboration using firebase.

    # Setups
    - When global declarative not working, (-g @angular/cli), On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following.

        Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

    - Install Jquery, Bootstrap : npm install jquery --save,  npm install bootstrap and include the nodemodules path scripts, styles in angular.json to globalize. Now (import * as $ from jquery).

    # Firebase
    - Login on firebase, with a google id.
    - Create a project, enter project name and confirm, (analytics option can be enabled as per requirement).
    - After project builded, open project.
    - Click on web code section on home (</> something like this symbol). And register our app.
    - If need to deploy, select firebase hosting service. And confirm register app.
    - Add the SDK commands (include npm firebase install, copy paste the script provided in ts file.)
    - We need to export the firebase app, to use in different modules.
    # Firebase CLI For Deployment
    - Add firebase CLI with npm install. (npm install -g firebase-tools)
    - For Deploying we use commands 
        - (firebase login) : To signin to google
        - (firebase init): Intialise project, Run this command from your app’s root directory.
        - (firebase deploy): To deploy, Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory 
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
- Command for create route guard-  ng generate guard dirpath/GUARDNAME
    - Here are the 4 types of routing guards available:

        CanActivate: Checks to see if a user can visit a route.

        CanActivateChild: Checks to see if a user can visit a routes children.

        CanDeactivate: Checks to see if a user can exit a route.

        Resolve: Performs route data retrieval before route activation.

        CanLoad: Checks to see if a user can route to a module that lazy loaded.


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

- We don't need to export the component from it's module to use in any route file.
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
- In html of nav 'routerLink' attribute can be used to pass the ref link, 'routerLinkActive' make it active on not class css.
- The angular tag <router-outlet></router-outlet> will loads the components inside it according to routes.
    # Wildcard
    - Angular have wildcard routing '{ path: '**', component: <component-name> }' to show custom 404 page etc...
    - All the invalid routes will loads this page

# Tail-wind css
- Do run the cmds: npm install -D tailwindcss postcss autoprefixer
                    npx tailwindcss init
- Refer to the doc: https://tailwindcss.com/docs/guides/angular
- Like bootstrap we can include the classes.

# Authentication
- Login & Register forms, in auth module.
- If components are generated by specifying the module directory it will be registered in declarations automatically.
    Eg: ng generate component auth/register
- We don't need to export the component from it's module to use in any route file.

# Angular Form
- Login component for email and password we use two way binding using ngModel, eg: [(ngModel)]="email".
- The ngSubmit is a ng directive for action of form submit, placed in form tag.
    # Validation
    - Use of template label, can use to refer to input to show error message. ie, #email="ngModel" .
    - While the form can be labelled as NgForm, eg: #regForm="ngForm".
    - Make it required field in form input by adding attribute "required". Unless stated rewuired we cannot make validation.
    - We can add properties of an HTML tag as [hidden]="email.valid".
    - For validation we can use the NgIf directive to show error, *ngIf="email.invalid && (email.dirty || email.touched)" . Dirty input used to validate value without focus out from input field.
    - The SUBMIT button can be disabled, if from invalid like [disabled]="regForm.form.invalid" or "regForm.invalid".

# Firebase Authentication
- Use the exported firebaseConfig from firebase module.
- On the base app.component.ts initialise it, ngOninit to load firebase APP.
- On project registered on the firebase, open Build-> Authentication, click get started and then add the validation way/ signin provider.
- Please refer the docs, build-> authentication -> web, to see all signin, signup docs etc...
- Use the codes in our register / login component for the authentication.

# ngIfElse
- This directive can be used with an '<ng-template #loading>' to show the template if expression not match.
eg: usage can be the loading indication on api hit events.

# Check For Auth
- The auth token is available in firebase, auth.currentUser property.
- We usually creates a service which is used to manage users token.
    # getter/setter
    - It is used to declare setter/getter by set and get keyword with same function name,ie, 
    public get isAuthorized() , public set isAuthorized().

    # Router Module: Route after login / auth check
    - We can use <b<Router</b> module of the angular to redirects to different routes. 
    eg:  Usage this.router.navigate(['']) after loggedIn.

# Route Guard
- Command - ng generate guard dirpath/GUARDNAME
- Used for guard the route when in some condition. Eg: If already loggedIn not load login page again.
- It is somewhat same as service, but can use as the guard logic inside the each guard method.
- In each guard method we can return a boolean which tells, app.routing.module like  
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
- 

# Passing Dynamic data to a Route (via state)
- If routed via, this.router.navigateByUrl('/dynamic', { state: { id:1 , name:'Angular' } });
- Get data in component using,
    constructor(private router:Router, private activatedRoute:ActivatedRoute) {
          console.log(this.router.getCurrentNavigation().extras.state);
     }
 
     ngOnInit() {
          //console.log(history.state);
          this.product=history.state;
     }

     constructor(private location:Location){
          console.log(this.location.getState());
    }

# Passing static data to a Route (via data)
- If static data passed through route module, { path: 'static', component: StaticComponent, data :{ id:'1', name:"Angular"}},
- We can access via,

    ngOnInit() {
        this.activatedroute.data.subscribe(data => {
            this.product=data;
        })
    }