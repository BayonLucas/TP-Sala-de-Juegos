import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  public nombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public contrasenia: string = '';
  public confirmContrasenia: string = '';

  public errorMessage: string = ""
  public error: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
    ) { }



  public Validar_campos(){
    let ret = false;
    if(this.nombre !== '' && this.apellido !== '' && this.email !== '' && this.contrasenia !== '' && this.confirmContrasenia !== '' && (this.contrasenia == this.confirmContrasenia)){
      ret = true;
    }
  
    return ret;
  }

  public RegistrarUsuario(){
    this.error = false;
    this.errorMessage = "";

    let user = {
      apellido: this.apellido,
      email: this.email,
      fecha_creacion: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US'),
      nombre: this.nombre,
      password: this.contrasenia,
      ultimo_log: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US')
    }
    
    this.auth.crear_cuenta(user).then(res => {
      this.error = true;
      this.errorMessage = "El usuario ya está registrado"
    });

  }
  


}
