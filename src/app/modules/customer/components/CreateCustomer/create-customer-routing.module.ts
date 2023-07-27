import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerPage } from './create-customer.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCustomerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCustomerPageRoutingModule {}
