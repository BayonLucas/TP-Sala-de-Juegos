import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { onAuthStateChanged } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  async login(mail: string, pass: string){
    try{
      return await this.auth.signInWithEmailAndPassword(mail, pass);
    }
    catch(err){
     
      console.error("Error en el login", err);
      return null; 
    }
  }

  async create_acount(mail: string, pass: string){
    try{
      return await this.auth.createUserWithEmailAndPassword(mail, pass)
    }
    catch(err){
      console.error("Error al crear cuenta", err);
      return null;
    }
  }

  



}
