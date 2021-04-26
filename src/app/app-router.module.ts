import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login/pages/login-user/login-user.component';
import { RegisterUserComponent } from './login/pages/register-user/register-user.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { EditarPerfilComponent } from './dashboard/pages/editar-perfil/editar-perfil.component';
import { ResultadosComponent } from './game/pages/resultados/resultados.component';
import { InfoComponent } from './dashboard/pages/info/info.component';
import { CrearComponent } from './game/pages/crear/crear.component';
import { UnirseComponent } from './game/pages/unirse/unirse.component';
import { EsperandoComponent } from './game/pages/esperando/esperando.component';
import { LetrasComponent } from './game/pages/letras/letras.component';
import { JugandoComponent } from './game/pages/jugando/jugando.component';
import { VideoChatComponent } from './game/pages/video-chat/video-chat.component';
import { FinalComponent } from './game/pages/final/final.component';


const routes:Routes = [
  {
    path:'404',
    component:NotFoundComponent
  },
  {
    path:'',
    component:LoginUserComponent,
    pathMatch:"full"
  },
  {
    path:'login',
    component: LoginUserComponent
  },
  {
    path:'register',
    component:RegisterUserComponent
  },
  {
    path:"dashboard",
    component:HomeComponent
  },
  {
    path:"dashboard/letras",
    component:LetrasComponent
  },
  {
    path:"dashboard/jugando",
    component:JugandoComponent
  },
  {
    path:"dashboard/info",
    component:InfoComponent
  },
  {
    path:"dashboard/editar",
    component:EditarPerfilComponent
  },
  {
    path:"dashboard/crear",
    component:CrearComponent
  },
  {
    path:"dashboard/unirse",
    component:UnirseComponent
  },
  {
    path:"dashboard/esperando",
    component:EsperandoComponent
  },
  {
    path:"dashboard/resultados",
    component:ResultadosComponent
  },
  {
    path:"dashboard/video",
    component:VideoChatComponent
  },
  {
    path:"dashboard/final",
    component:FinalComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
