import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { N1Page } from './n1.page';

const routes: Routes = [
  {
    path: '',
    component: N1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N1PageRoutingModule {}
