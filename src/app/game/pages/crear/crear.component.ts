import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BastaService } from '../../../services/basta.service';
import { JugadorClass } from '../../../interfaces/jugador.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styles: [
  ]
})
export class CrearComponent implements OnInit {
  @ViewChild('txtAddCat') txtAddCat !: ElementRef<HTMLInputElement>;
  numPart:number;
  sesion?:boolean;
  player:JugadorClass;
  categorias:string[];

  constructor(private serviceBasta:BastaService,private router:Router) { 
    this.numPart = 0;
    this.player = this.serviceBasta.dataPlayer;
    this.sesion = this.serviceBasta.sesion;
    this.categorias = [];
  }

  ngOnInit(): void {
  }

  addCat()
  {
    const add:string = this.txtAddCat.nativeElement.value;
    this.categorias.push(add);
    this.txtAddCat.nativeElement.value="";
  }

  borrar()
  {
    this.categorias.pop();
  }
  
  redireccionar()
  {
    this.router.navigate(['/login']);
  }
}
