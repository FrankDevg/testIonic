// edit-customer-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCustomerPage } from './edit-customer.page';

const routes: Routes = [
  {
    path: '',
    component: EditCustomerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCustomerPageRoutingModule {}
