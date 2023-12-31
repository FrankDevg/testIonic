// create-order-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderPage } from './create-order.page';

const routes: Routes = [
  {
    path: '',
    component: CreateOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOrderPageRoutingModule {}
