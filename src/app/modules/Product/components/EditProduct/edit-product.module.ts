import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EditProductPage } from './edit-product.page';

const routes: Routes = [
  {
    path: '',
    component: EditProductPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EditProductPage],
})
export class EditProductPageModule {}
