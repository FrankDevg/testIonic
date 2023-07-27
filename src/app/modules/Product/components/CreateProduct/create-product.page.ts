import { Component } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createproduct',
  templateUrl: 'create-product.page.html',
  styleUrls: ['create-product.page.scss'],
})
export class CreateProductPage {
  newProduct: Product = {
    _id: '',
    uPC: '',
    prodName: '',
    mgGr: '',
    model: '',
    unitListPrice: 0,
    unitsInStock: 0,
  };

  constructor(private productService: ProductService, private toastController: ToastController) {}

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color,
    });
    toast.present();
  }
  
  generateUniqueId() {
    // Generar un identificador único combinando una parte aleatoria y la fecha actual en milisegundos
    const randomPart = Math.random().toString(36).substr(2, 10); // Parte aleatoria de 10 caracteres
    const timestampPart = new Date().getTime().toString(36); // Fecha actual en milisegundos convertida a base36
    this.newProduct._id = `${randomPart}${timestampPart}`;
  }

  createProduct() {
    this.generateUniqueId();
    this.productService.createProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Producto creado exitosamente:', response);
        this.presentToast('Producto creado exitosamente', 'success'); // Mostrar mensaje de éxito
        // Lógica adicional o redireccionamiento después de crear el producto
      },
      (error) => {
        console.error('Error al crear el producto:', error);
        this.presentToast('Error al crear el producto', 'danger'); // Mostrar mensaje de error
      }
    );
  }
}
