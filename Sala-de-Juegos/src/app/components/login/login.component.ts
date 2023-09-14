import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})




export class LoginComponent {

  public mail: string = '';
  public pass: string = '';

  constructor(private router: Router){}


  public onClick(event?: any): void{
    console.log(this.mail);
    console.log(this.pass);
    // this.router.navigateByUrl("Home");
  }


}
