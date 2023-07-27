import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CreateCustomerPage } from './create-customer.page';

import { CreateCustomerPageRoutingModule } from './create-customer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCustomerPageRoutingModule
  ],
  declarations: [CreateCustomerPage]
})
export class CreateCustomerPageModule {}
