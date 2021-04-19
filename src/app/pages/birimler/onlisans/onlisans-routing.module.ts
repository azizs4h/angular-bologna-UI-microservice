import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlisansComponent } from './onlisans.component';


const routes: Routes = [
  {
    path: '',
    component: OnlisansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlisansRoutingModule { }

