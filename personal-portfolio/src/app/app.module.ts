import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactPipe } from 'src/pipes/contactPipe';
import { AuthModule } from './auth/auth.module';
import { FirebaseApp, initializeApp } from "firebase/app";
import { firebaseConfig } from './firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FontAwesomeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
