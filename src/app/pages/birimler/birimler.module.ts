import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirimlerRoutingModule } from './birimler-routing.module';
import { BirimlerComponent } from './birimler.component';

@NgModule({
  imports: [
    CommonModule,
    BirimlerRoutingModule
  ],
  declarations: [BirimlerComponent]
})
export class BirimlerModule{}