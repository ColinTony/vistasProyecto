import { Component, OnInit } from '@angular/core';
import { JugadorClass } from '../../../interfaces/jugador.interface';
import { BastaService } from '../../../services/basta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.component.html',
  styles: [
  ]
})
export class UnirseComponent implements OnInit {
  sesion?:boolean; // nunca sera null
  player:JugadorClass;

  constructor(private serviceBasta:BastaService,private router:Router) {
    this.player = this.serviceBasta.dataPlayer;
    this.sesion = this.serviceBasta.sesion;
   }
   
  ngOnInit(): void {
  }
  redireccionar()
  {
    this.router.navigate(['/login']);
  }
}
