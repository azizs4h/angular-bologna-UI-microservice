import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HakkindaComponent } from './hakkinda.component';

const routes: Routes = [
  {
    path: '',
    component: HakkindaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HakkindaRoutingModule { }

