import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CollectionsManagerService } from 'src/app/services/collections-manager.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  public email: string = '';
  public pass: string = '';
  public err: boolean = false;
  public list: any;

  constructor(
    private router: Router, 
    private auth: AuthService,
    private db: CollectionsManagerService
  ){  }

  ngOnInit(): void {
    this.db.TraerUsuarios().then((usuarios) => {
      this.list = usuarios;
    });
  }

  public Iniciar_Sesion(event?: any): void{
    console.log(this.auth.login(this.email, this.pass));
    this.router.navigateByUrl("home");
  }

  public onCargar_acceso_rapido(){
    let index = Math.floor(Math.random() * (this.list.length));
    let randomUser = this.list[index];
  
    this.email = randomUser.email;
    this.pass = randomUser.password;
  }

}