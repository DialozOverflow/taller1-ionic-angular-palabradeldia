import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { N3PageRoutingModule } from './n3-routing.module';

import { N3Page } from './n3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    N3PageRoutingModule
  ],
  declarations: [N3Page]
})
export class N3PageModule {}
