import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoktoraComponent } from './doktora.component';
import { DoktoraRoutingModule } from './doktora-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DoktoraRoutingModule
  ],
  declarations: [DoktoraComponent]
})
export class DoktoraModule{}