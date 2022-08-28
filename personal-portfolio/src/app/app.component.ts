import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  public title = 'personal-portfolio';
  public firebaseApi: FirebaseApp = {} as FirebaseApp;
  public loggedIn: boolean = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.firebaseApi = initializeApp(firebaseConfig);
  }

  ngAfterContentChecked(){
    this.loggedIn = this.authService.isAuthorized;
  }

  public signOut(){
    this.authService.logout();
  }
}


