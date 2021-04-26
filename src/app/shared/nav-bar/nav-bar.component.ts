import { Component, Input, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  
  itemsSinCuenta:MenuItem[];
  itemsCuentaOpen:MenuItem[];

  @Input() isCuentaAbierta?:boolean;

  constructor() {
    this.itemsSinCuenta = [];
    this.itemsCuentaOpen = [];
  }

  ngOnInit(): void {
    this.itemsSinCuenta = [
      {
        label:"Entrar y Jugar",
        icon:"pi pi-desktop",
        items:[
          {
            label:"Iniciar Sesion",
            icon:"pi pi-sign-in",
            routerLink:"login"
          },
          {
            label:"Register",
            icon:"pi pi-pencil",
            routerLink:'register'
          }
        ]
      }
  ];

  this.itemsCuentaOpen = [
    {
      label:"Perfil",
      icon:"pi pi-user",
      items:[
        {
          label:"Mis juegos",
          icon:"pi pi-info-circle",
          routerLink:"/dashboard/info"
          
        },
        {
          label:"Editar info",
          icon:"pi pi-user-edit",
          routerLink:"/dashboard/editar"
        },
        {
          label:"Cerrar Sesion",
          icon:"pi pi-sign-out"
        }
      ]
    },{
      label:"Jugar",
      icon:"pi pi-desktop",
      items:[
        {
          label:"Unirse a Sala",
          icon:"pi pi-users",
          routerLink:"/dashboard/unirse"
        },
        {
          label:"Crear Sala",
          icon:"pi pi-plus",
          routerLink:"/dashboard/crear"
        }
      ]
    }
  ];
  }

}
