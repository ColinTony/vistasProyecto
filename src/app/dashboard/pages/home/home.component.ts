import { Component, OnInit } from '@angular/core';
import { BastaService } from '../../../services/basta.service';
import { JugadorClass } from '../../../interfaces/jugador.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  sesion?:boolean;
  player:JugadorClass;

  constructor(private serviceBasta:BastaService) { 
    this.player = serviceBasta.dataPlayer;
  }

  ngOnInit(): void {
    this.sesion = this.serviceBasta.sesion;
  }

}
