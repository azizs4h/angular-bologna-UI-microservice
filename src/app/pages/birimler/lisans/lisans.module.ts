import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LisansRoutingModule } from './lisans-routing.module';
import { LisansComponent } from './lisans.component';

@NgModule({
  imports: [
    CommonModule,
    LisansRoutingModule
  ],
  declarations: [LisansComponent]
})
export class LisansModule{}