import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { UnirseComponent } from './pages/unirse/unirse.component';
import { CrearComponent } from './pages/crear/crear.component';
import { EsperandoComponent } from './pages/esperando/esperando.component';
import { JugandoComponent } from './pages/jugando/jugando.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { LetrasComponent } from './pages/letras/letras.component';
import { VideoChatComponent } from './pages/video-chat/video-chat.component';
import { FinalComponent } from './pages/final/final.component';



@NgModule({
  declarations: [
    ResultadosComponent,
    UnirseComponent,
    CrearComponent,
    EsperandoComponent,
    JugandoComponent,
    LetrasComponent,
    VideoChatComponent,
    FinalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule
  ]
})
export class GameModule { }
