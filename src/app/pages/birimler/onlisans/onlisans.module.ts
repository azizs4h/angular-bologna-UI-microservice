import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlisansRoutingModule } from './onlisans-routing.module';
import { OnlisansComponent } from './onlisans.component';


@NgModule({
  imports: [
    CommonModule,
    OnlisansRoutingModule
  ],
  declarations: [OnlisansComponent]
})
export class OnlisansModule{}