import { Component, OnInit } from '@angular/core';
import { BastaService } from '../../../services/basta.service';
import { JugadorClass } from '../../../interfaces/jugador.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {

  sesion?:boolean; // nunca sera null
  player:JugadorClass;
  data: any;

  constructor(private serviceBasta:BastaService,private router:Router) 
  { 
    this.player = this.serviceBasta.dataPlayer;
    this.sesion = this.serviceBasta.sesion;
    
    this.data = {
      labels: ['Ganadas','Perdidas','Empate'],
      datasets: [
          {
              data: [this.player.ganadas, this.player.perdidas,this.player.empate],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }

  ngOnInit(): void {
      // init
  }

  redireccionar()
  {
    this.router.navigate(['/login']);
  }

  update(event: Event) 
  {
    this.data = {
      labels: ['Ganadas','Perdidas','Empate'],
      datasets: [
          {
              data: [this.player.ganadas, this.player.perdidas,this.player.empate],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  }
}
