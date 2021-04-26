import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BastaService } from '../../../services/basta.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html'
})
export class LoginUserComponent implements OnInit {

  sesion?:boolean;
  
  constructor(private router:Router,private serviceBasta:BastaService) { }

  ngOnInit(): void 
  {
    this.sesion = this.serviceBasta.sesion;
  }
  redireccionar()
  {
    this.router.navigate(['/dashboard']);
  }

  entrar()
  {
    console.log("Entrando");
    this.serviceBasta.activarCuenta();
    this.sesion = this.serviceBasta.sesion;
    this.redireccionar();
  }
}
