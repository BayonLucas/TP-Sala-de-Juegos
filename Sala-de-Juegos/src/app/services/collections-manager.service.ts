import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { formatDate } from '@angular/common';
import { USE_EMULATOR } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class CollectionsManagerService {

  private c_Usuarios:string = 'users';
  private c_Logs:string = 'logs';


  constructor(private firestore: AngularFirestore){}

  public async GuardarUsuario(user: any){
    this.firestore.collection(this.c_Usuarios).add(user)
      .then(user => {
        console.log('Usuario creado: ', user);
      })
      .catch(err => {
        console.log('Error al crear usuario: ', err);
      });  
  }
  
  public async GuardarLog(email: string){
    let log = {
      user_email: email,
      fecha_logueo: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US'),
    }
    this.firestore.collection(this.c_Logs).add(log)
      .then(log => {
        console.log('log generado', log);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // public async TraerUsuarios() {
  //   return this.firestore.collection(this.c_Usuarios).valueChanges()
  //     .subscribe((next: any) => {
  //       console.log(next);
  //     });
  // }
  public TraerUsuarios() {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(this.c_Usuarios).valueChanges()
        .subscribe((next: any) => {
          resolve(next);
        }, (error: any) => {
          reject(error);
        });
    });
  }

}
