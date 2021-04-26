import { Component, OnInit } from '@angular/core';
import { BastaService } from '../../../services/basta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html'
})
export class RegisterUserComponent implements OnInit {

  sesion?:boolean; // nunca sera null
  
  constructor(private serviceBasta:BastaService,private router:Router) { }

  // Tenemos el ngOnInit
  ngOnInit(): void
  {
    this.sesion = this.serviceBasta.sesion; // revisa si ya existe la sesion
  }
  
  redireccionar()
  {
    this.router.navigate(['/dashboard']);
  }
}
