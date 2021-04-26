import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { PrimengModule } from '../primeng/primeng.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent
  ],
  exports:[
    NavBarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
