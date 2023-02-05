import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaPageRoutingModule } from './linea-routing.module';

import { LineaPage } from './linea.page';
import { ComponentesModule } from '../../componentes/componentes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    LineaPageRoutingModule
  ],
  declarations: [LineaPage]
})
export class LineaPageModule {}
