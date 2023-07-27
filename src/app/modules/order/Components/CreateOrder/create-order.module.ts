import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CreateOrderPage } from './create-order.page'; 

import { CreateOrderPageRoutingModule } from './create-order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOrderPageRoutingModule
  ],
  declarations: [CreateOrderPage]
})
export class CreateOrderPageModule {} 
