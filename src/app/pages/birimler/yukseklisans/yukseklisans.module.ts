import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YuksekLisansRoutingModule } from './yukseklisans-routing.module';
import { YukseklisansComponent } from './yukseklisans.component';

@NgModule({
  imports: [
    CommonModule,
    YuksekLisansRoutingModule
  ],
  declarations: [YukseklisansComponent]
})
export class YuksekLisansModule{}