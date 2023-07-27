// edit-order-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOrderPage } from './edit-order.page';

const routes: Routes = [
  {
    path: '',
    component: EditOrderPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOrderPageRoutingModule {}
