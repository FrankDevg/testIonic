import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPage } from './order.page'; // Asegúrate de importar el componente correcto para OrderPage

const routes: Routes = [
  {
    path: '',
    component: OrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPageRoutingModule {}
