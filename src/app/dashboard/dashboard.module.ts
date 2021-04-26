import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { InfoComponent } from './pages/info/info.component';




@NgModule({
  declarations: [
    HomeComponent,
    EditarPerfilComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule
  ]
})
export class DashboardModule { }
