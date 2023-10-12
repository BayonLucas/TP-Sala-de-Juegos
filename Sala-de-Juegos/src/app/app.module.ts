import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { JuegosComponent } from './modules/juegos/juegos.component';
import { NavComponent } from './components/nav/nav.component';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyCK0dk5KubV8by7j1a6nfsl8QMsEEpf6oc",
  authDomain: "tp-sala-de-juegos-d8256.firebaseapp.com",
  projectId: "tp-sala-de-juegos-d8256",
  storageBucket: "tp-sala-de-juegos-d8256.appspot.com",
  messagingSenderId: "232574508792",
  appId: "1:232574508792:web:abb797a0bc454c7148250d"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    NotFoundComponent,
    RegisterComponent,
    JuegosComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
