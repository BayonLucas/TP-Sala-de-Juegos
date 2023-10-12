import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent {


  constructor(private auth: AuthService, private router: Router){}

  onClickJugar(){
    this.auth.getUsuarioLogueado().subscribe(res => {
      if(res?.email){
        this.router.navigateByUrl('#');
      }
      else{
        this.router.navigateByUrl('/login');
      }
    })
    
    
    
    // console.log(this.auth.getUsuarioLogueado() as user*)

    // if(this.auth.getUsuarioLogueado() !== null){
    //   this.router.navigateByUrl('#');
    // }
    // else{
    //   this.router.navigateByUrl('/login');
    // }
  }


}
