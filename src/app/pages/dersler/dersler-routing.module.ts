import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DerslerComponent } from './dersler.component';

const routes: Routes = [
  {
    path: '',
    component: DerslerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DerslerRoutingModule { }

