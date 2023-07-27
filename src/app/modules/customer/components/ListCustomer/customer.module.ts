import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerPage } from './customer.page';

import { CustomerPageRoutingModule } from './customer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerPageRoutingModule
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
