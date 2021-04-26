import { Component, OnInit } from '@angular/core';
import { CategoriasClass } from '../../../interfaces/categorias.interface';
import { BastaService } from '../../../services/basta.service';
import { Router } from '@angular/router';
import { JugadorClass } from '../../../interfaces/jugador.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

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
    this.players.push(this.player);
    // creando jugadores
    const player:JugadorClass = 
    {
      id:123,
      usuario:  "Loko3000",
      pass:     "pass",
      email:    "email@email",
      nombre:   "Luis Antonio",
      apeP:     "Colin",
      apeM:     "Heredia",
      partidas: 10,
      ganadas:  4,
      empate: 1,
      perdidas: 5
    };
    const player2:JugadorClass = 
    {
      id:123,
      usuario:  "santi513",
      pass:     "pass",
      email:    "email@email",
      nombre:   "Luis Antonio",
      apeP:     "Colin",
      apeM:     "Heredia",
      partidas: 11,
      ganadas:  6,
      empate:0,
      perdidas: 5
    }
    this.players.push(player);
    this.players.push(player2);
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
