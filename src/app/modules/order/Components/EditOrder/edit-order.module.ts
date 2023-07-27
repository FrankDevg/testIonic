// edit-order.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditOrderPage } from './edit-order.page'; // Asegúrate de importar el componente correcto para la edición de órdenes

const routes: Routes = [
  {
    path: '',
    component: EditOrderPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditOrderPage],
})
export class EditOrderPageModule {}
