import { Component, OnInit } from '@angular/core';
import { JugadorClass } from '../../../interfaces/jugador.interface';
import { BastaService } from '../../../services/basta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styles: [
  ]
})
export class FinalComponent implements OnInit {

  numPart:number;
  sesion!:boolean;
  players:JugadorClass[];
  player:JugadorClass;
  
  constructor(private serviceBasta:BastaService,private router:Router) {
    this.numPart = 10;
    this.players = [];
    this.player = this.serviceBasta.dataPlayer;
    this.sesion = this.serviceBasta.sesion;
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
      empate: 0,
      perdidas: 5
    }
    this.players.push(player);
    this.players.push(player2);
  }

  redireccionar()
  {
    this.router.navigate(['/login']);
  }
}
