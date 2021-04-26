import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BastaService } from '../../../services/basta.service';
import { JugadorClass } from '../../../interfaces/jugador.interface';

@Component({
  selector: 'app-letras',
  templateUrl: './letras.component.html',
  styles: [
  ]
})
export class LetrasComponent implements OnInit {

  sesion?:boolean; // nunca sera null
  player:JugadorClass;
  letras:string[];
  letra:string = 'A';

  constructor(private serviceBasta:BastaService,private router:Router) {
    this.player = this.serviceBasta.dataPlayer;
    this.sesion = this.serviceBasta.sesion;
    this.letras = ['A','B','C','D','E','F','G','H','I','J','K'];
  }

  ngOnInit(): void {
  }
  
  
  redireccionar()
  {
    this.router.navigate(['/login']);
  }

}
