// app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/components/ListCustomer/customer.module').then( m => m.CustomerPageModule)
  },
  {  path: 'customerCreate',
  loadChildren: () => import('./modules/customer/components/CreateCustomer/create-customer.module').then( m => m.CreateCustomerPageModule) 
  },
  {  path: 'customerEdit/:id',
  loadChildren: () => import('./modules/customer/components/EditCustomer/edit-customer.module').then( m => m.EditCustomerPageModule) 
  },
  {
    path: 'order',
    loadChildren: () => import('./modules/order/Components/ListOrder/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'OrderCreate',
    loadChildren: () => import('./modules/order/Components/CreateOrder/create-order.module').then( m => m.CreateOrderPageModule)
  },
  {  path: 'orderEdit/:id',
  loadChildren: () => import('./modules/order/Components/EditOrder/edit-order.module').then( m => m.EditOrderPageModule) 
  }, {
    path: 'product',
    loadChildren: () => import('./modules/Product/components/ListProduct/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'ProductCreate',
    loadChildren: () => import('./modules/Product/components/CreateProduct/create-product.module').then( m => m.CreateProductPageModule)
  },
  {  path: 'productEdit/:id',
  loadChildren: () => import('./modules/Product/components/EditProduct/edit-product.module').then( m => m.EditProductPageModule) 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
