import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'n1',
    loadChildren: () => import('./n1/n1.module').then( m => m.N1PageModule)
  },
  {
    path: 'n2',
    loadChildren: () => import('./n2/n2.module').then( m => m.N2PageModule)
  },
  {
    path: 'n3',
    loadChildren: () => import('./n3/n3.module').then( m => m.N3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
