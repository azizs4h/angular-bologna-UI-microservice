import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TohsayfayokComponent } from './pages/tohsayfayok/tohsayfayok.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaComponent
  },
  {
    path: 'birimler',
    loadChildren: () => import('./pages/birimler/birimler.module').then(m => m.BirimlerModule)
  },
  {
    path: 'birimler/doktora',
    loadChildren: () => import('./pages/birimler/doktora/doktora.module').then(m => m.DoktoraModule)
  },
  {
    path: 'birimler/yukseklisans',
    loadChildren: () => import('./pages/birimler/yukseklisans/yukseklisans.module').then(m => m.YuksekLisansModule)
  },
  {
    path: 'birimler/lisans',
    loadChildren: () => import('./pages/birimler/lisans/lisans.module').then(m => m.LisansModule)
  },
  {
    path: 'birimler/onlisans',
    loadChildren: () => import('./pages/birimler/onlisans/onlisans.module').then(m => m.OnlisansModule)
  },
  {
    path: 'dersler',
    loadChildren: () => import('./pages/dersler/dersler.module').then(m => m.DerslerModule)
  },
  {
    path: 'hakkinda/:id',
    loadChildren: () => import('./pages/hakkinda/hakkinda.module').then(m => m.HakkindaModule)
  },
  {
    path: 'programciktisi',
    loadChildren: () => import('./pages/programciktisi/programciktisi.module').then(m => m.ProgramCiktisiModule)
  },
  {
    path: '**', 
    component: TohsayfayokComponent
  }
];

@NgModule({    
  imports: [
    RouterModule.forRoot(routes)
  ],    
  exports: [RouterModule]    
}) 
export class AppRoutingModule { }
export const routingComponents = [
  AnasayfaComponent,
  TohsayfayokComponent
]