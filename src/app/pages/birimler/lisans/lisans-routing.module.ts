import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LisansComponent } from './lisans.component';


const routes: Routes = [
  {
    path: '',
    component: LisansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LisansRoutingModule { }

