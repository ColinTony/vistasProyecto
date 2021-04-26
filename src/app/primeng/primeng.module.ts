import { NgModule } from '@angular/core';

// primeNG
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {InputNumberModule} from 'primeng/inputnumber';
import {TableModule} from 'primeng/table';
import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
  declarations: [],
  exports:[
    InputTextModule,
    ButtonModule,
    DividerModule,
    ChartModule,
    InputNumberModule,
    MenubarModule,
    SkeletonModule,
    TableModule
  ]
})
export class PrimengModule { }
