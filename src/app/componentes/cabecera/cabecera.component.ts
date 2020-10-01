import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    
   }

  userLogueado:any;
  mailUser:any;

  ngOnInit() {
    this.authService.getCurrentUser().then((response:any) => {
      this.mailUser= response.email;
    }).catch((error :any) => console.log(error));
    
  }

  salir(){
    this.authService.logOutCurrentUser();
    this.router.navigate(['/Login']);
  }



}
