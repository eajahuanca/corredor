import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasajerosPageRoutingModule } from './pasajeros-routing.module';

import { PasajerosPage } from './pasajeros.page';
import { ComponentesModule } from "../../componentes/componentes.module";


@NgModule({
    declarations: [PasajerosPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentesModule,
        PasajerosPageRoutingModule
    ]
})
export class PasajerosPageModule {}
