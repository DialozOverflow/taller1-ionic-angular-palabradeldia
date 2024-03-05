import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { N2Page } from './n2.page';

const routes: Routes = [
  {
    path: '',
    component: N2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N2PageRoutingModule {}
