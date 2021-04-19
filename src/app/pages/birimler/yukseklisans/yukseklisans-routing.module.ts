import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YukseklisansComponent } from './yukseklisans.component';

const routes: Routes = [
  {
    path: '',
    component: YukseklisansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YuksekLisansRoutingModule { }

