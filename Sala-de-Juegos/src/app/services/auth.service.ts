import { Injectable, importProvidersFrom } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { EmailAuthCredential, onAuthStateChanged } from '@firebase/auth';
import { subscribeOn } from 'rxjs';
import { CollectionsManagerService } from './collections-manager.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth, 
    private router: Router,
    private db: CollectionsManagerService
    ) { }

  async login(email: string, pass: string){
    try{
      await this.auth.signInWithEmailAndPassword(email, pass);
      this.db.GuardarLog(email);
      return this.db.TraerUsuarios();
    }
    catch(err){
      console.log("Error en el login", err);
      return null; 
    }
  }

  async crear_cuenta(user: any){
    try{
      await this.auth.createUserWithEmailAndPassword(user.email, user.password)
      this.db.GuardarUsuario(user);
      this.db.GuardarLog(user.email);
      this.router.navigateByUrl('home');
    }
    catch(err){
      console.error("Error al crear cuenta", err);
    }
  }

  getUsuarioLogueado() {
    return this.auth.authState;
  }
  
  getEmailLogueado(){
    this.getUsuarioLogueado().subscribe(res => {
      return res?.email;
    })
  }

  cerrarSesion() {
    this.auth.signOut();
    console.log('usuario', this.auth.currentUser);
    this.router.navigateByUrl('login');
  }

}
