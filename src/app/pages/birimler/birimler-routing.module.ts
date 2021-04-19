import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirimlerComponent } from './birimler.component';

const routes: Routes = [
  {
    path: '',
    component: BirimlerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BirimlerRoutingModule { }

