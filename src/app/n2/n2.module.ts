import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { N2PageRoutingModule } from './n2-routing.module';

import { N2Page } from './n2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    N2PageRoutingModule
  ],
  declarations: [N2Page]
})
export class N2PageModule {}
