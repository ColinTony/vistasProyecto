import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BastaService } from '../../../services/basta.service';
import { JugadorClass } from '../../../interfaces/jugador.interface';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html'
})
export class EditarPerfilComponent implements OnInit {
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
