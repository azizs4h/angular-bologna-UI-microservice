import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramciktisiComponent } from './programciktisi.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramciktisiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramCiktisiRoutingModule { }

