import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HakkindaRoutingModule } from './hakkinda-routing.module';
import { HakkindaComponent } from './hakkinda.component';
import { DerslerComponent } from '../dersler/dersler.component';
import { ProgramciktisiComponent } from '../programciktisi/programciktisi.component';

@NgModule({
  imports: [
    CommonModule,
    HakkindaRoutingModule
  ],
  declarations: [HakkindaComponent,DerslerComponent,ProgramciktisiComponent]
})
export class HakkindaModule{}
