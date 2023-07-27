import { Component } from '@angular/core';
import { Product } from '../../../../shared/models/product.model'; // Cambiar el modelo a Product
import { Router } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service'; // Cambiar el servicio a ProductService

@Component({
  selector: 'app-product', // Cambiar el nombre del selector a 'app-product'
  templateUrl: 'product.page.html',
  styleUrls: ['product.page.scss'],
})
export class ProductPage { // Cambiar el nombre del componente a ProductPage
   products: Product[] | undefined; // Cambiar el nombre de la variable a 'products'

  // constructor(private productService: ProductService) {} // Cambiar el nombre del servicio a ProductService
  constructor(private productService: ProductService, private router: Router) {} // Cambiar el nombre del servicio a ProductService

  ngOnInit() {
    this.loadProducts(); // Cambiar el nombre del método a 'loadProducts'
  }

  loadProducts() { // Cambiar el nombre del método a 'loadProducts'
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data; // Cambiar el nombre de la variable a 'products'
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  redirectToEditProduct(productId: string) { // Cambiar el nombre del método a 'redirectToEditProduct'
    this.router.navigateByUrl(`/productEdit/${productId}`); // Cambiar el nombre de la ruta a '/productEdit'
  }
}
