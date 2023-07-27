// edit-customer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditCustomerPage } from './edit-customer.page';

const routes: Routes = [
  {
    path: '',
    component: EditCustomerPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditCustomerPage],
})
export class EditCustomerPageModule {}
