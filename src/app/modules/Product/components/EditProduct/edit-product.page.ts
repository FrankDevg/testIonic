import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product } from '../../../../shared/models/product.model'; // Asegúrate de importar el modelo correcto
import { ProductService } from '../../../../core/services/product.service'; // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  productId: string = '';
  product: Product = {
    _id: '',
    uPC: '',
    prodName: '',
    mgGr: '',
    model: '',
    unitListPrice: 0,
    unitsInStock: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService, // Asegúrate de inyectar el servicio correcto
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.loadProduct();
    });
  }

  loadProduct() {
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success',
    });
    toast.present();
  }

  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(
      (data) => {
        console.log('Product updated successfully:', data);
        this.presentToast('Product updated successfully');
      },
      (error) => {
        console.error('Error updating product:', error);
        this.presentToast('An error occurred');
      }
    );
  }
}
