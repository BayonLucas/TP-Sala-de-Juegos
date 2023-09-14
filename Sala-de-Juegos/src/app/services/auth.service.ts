import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

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
      return 
    }
  }




}
