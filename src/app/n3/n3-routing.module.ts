import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { N3Page } from './n3.page';

const routes: Routes = [
  {
    path: '',
    component: N3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class N3PageRoutingModule {}
