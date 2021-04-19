import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DerslerComponent } from './dersler.component';
import { DerslerRoutingModule } from './dersler-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DerslerRoutingModule
  ],
  /*declarations: [DerslerComponent]*/

})
export class DerslerModule{}