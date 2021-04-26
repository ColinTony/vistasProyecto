import { Component, OnInit } from '@angular/core';
import { JugadorClass } from '../../../interfaces/jugador.interface';
import { BastaService } from '../../../services/basta.service';
import { Router } from '@angular/router';
import { CategoriasClass } from '../../../interfaces/categorias.interface';

@Component({
  selector: 'app-jugando',
  templateUrl: './jugando.component.html',
  styles: [
  ]
})
export class JugandoComponent implements OnInit {
  numPart:number;
  sesion!:boolean;
  categorias:CategoriasClass[];
  players:JugadorClass[];
  player:JugadorClass;

  constructor(private serviceBasta:BastaService,private router:Router) {
    this.numPart = 10;
    this.players = [];
    this.player = this.serviceBasta.dataPlayer;
    this.sesion = this.serviceBasta.sesion;
    this.categorias = [];
  }

   redireccionar()
   {
     this.router.navigate(['/login']);
   }
    
   ngOnInit(): void {
     const categoria:CategoriasClass = {
       id:'sesion',
       nombre:'Nombre',
       valor:''
     };
     const categoria2 = {
      id:'sesion',
      nombre:'Apellido',
      valor:''
    };
    const categoria3 = {
      id:'sesion',
      nombre:'Ciudad o País',
      valor:''
    };
    const categoria4 = {
      id:'sesion',
      nombre:'Pelicula',
      valor:''
    };
    const categoria5 = {
      id:'sesion',
      nombre:'Flor o Fruto',
      valor:''
    };

    this.categorias.push(categoria);
    this.categorias.push(categoria2);
    this.categorias.push(categoria3);
    this.categorias.push(categoria4);
    this.categorias.push(categoria5);
  }

}
