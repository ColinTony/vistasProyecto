import { Injectable } from '@angular/core';
import { JugadorClass } from '../interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class BastaService {

  private isSesion:boolean = false;
  
  constructor() {}

  /*
    Este codigo es temporal muientras conectamos con NodeJs
  */

  get sesion():boolean{return this.isSesion;}

  activarCuenta():void
  {
    this.isSesion = true;
  }
  
  desactivarCuenta():void
  {
    this.isSesion = false;
  }

  // obtener informaicon del jugador
 get dataPlayer():JugadorClass
 {
    const player:JugadorClass = 
    {
      id:123,
      usuario:  "NoobMaster",
      pass:     "pass",
      email:    "email@email",
      nombre:   "Luis Antonio",
      apeP:     "Colin",
      apeM:     "Heredia",
      partidas: 5,
      ganadas:  1,
      empate: 1,
      perdidas: 3
    }

    return player;
 }
}
