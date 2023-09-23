import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent {

  public mail: string = '';
  public pass: string = '';

  constructor(private router: Router, private auth: AuthService){}


  public onClick(event?: any): void{
    console.log(this.mail);
    console.log(this.pass);
    this.auth.login(this.mail, this.pass)


    this.router.navigateByUrl("home");
  }


}
