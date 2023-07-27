import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OrderPage } from './order.page'; // Asegúrate de importar el componente correcto para OrderPage

import { OrderPageRoutingModule } from './order-routing.module'; // Asegúrate de importar el archivo de enrutamiento correcto

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule, // Asegúrate de agregar el módulo de enrutamiento correcto aquí
  ],
  declarations: [OrderPage]
})
export class OrderPageModule {}
