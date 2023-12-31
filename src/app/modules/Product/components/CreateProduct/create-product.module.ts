import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CreateProductPage } from './create-product.page';

import { CreateProductPageRoutingModule } from './create-product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProductPageRoutingModule
  ],
  declarations: [CreateProductPage]
})
export class CreateProductPageModule {}
