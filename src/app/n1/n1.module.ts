import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { N1PageRoutingModule } from './n1-routing.module';

import { N1Page } from './n1.page';
import { PalabraComponent } from './palabra/palabra.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    N1PageRoutingModule
  ],
  declarations: [N1Page,PalabraComponent]
})
export class N1PageModule {}
