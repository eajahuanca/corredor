import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionPageRoutingModule } from './estacion-routing.module';

import { EstacionPage } from './estacion.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    EstacionPageRoutingModule
  ],
  declarations: [EstacionPage]
})
export class EstacionPageModule {}
