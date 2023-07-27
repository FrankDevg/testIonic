// create-order.page.ts
import { Component } from '@angular/core';
import { Order } from '../../../../shared/models/order.model'; 
import { OrderService } from '../../../../core/services/order.service'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-createorder',
  templateUrl: 'create-order.page.html',
  styleUrls: ['create-order.page.scss'],
})
export class CreateOrderPage {
  newOrder: Order = {
    id: '',
    orderDate: new Date(),
    soldBy: '',
    total: 0,
    mgGr: '',
    customerId: '',
  };

  constructor(private orderService: OrderService, private toastController: ToastController) {}

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
    this.newOrder.id = `${randomPart}${timestampPart}`;
  }

  createOrder() {
    this.generateUniqueId();

    this.orderService.createOrder(this.newOrder).subscribe(
      (response) => {
        console.log('Orden creada exitosamente:', response);
        this.presentToast('Orden creada exitosamente', 'success'); // Mostrar mensaje de éxito
        // Lógica adicional o redireccionamiento después de crear la orden
      },
      (error) => {
        console.error('Error al crear la orden:', error);
        this.presentToast('Error al crear la orden', 'danger'); // Mostrar mensaje de error
      }
    );
  }
}
