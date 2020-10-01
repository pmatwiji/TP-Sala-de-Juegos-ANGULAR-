import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from "../../servicios/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  correo:string = '';
  password:string= '';
  mensaje:string= '';


  constructor(
    private title:Title,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.title.setTitle("Sala de Juegos - Login");
  }



  Login() {
    this.authService.login(this.correo, this.password).then(response => {
      this.router.navigate(['/Principal']);
    }).catch(error => this.mensaje = error);

  }

  rapido() {
    this.correo = 'test@test.com';
    this.password = '123456';

  }

}
