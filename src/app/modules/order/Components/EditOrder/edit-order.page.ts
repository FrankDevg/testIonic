import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Order } from '../../../../shared/models/order.model'; // Asegúrate de importar el modelo correcto de Order
import { OrderService } from '../../../../core/services/order.service'; // Asegúrate de importar el servicio correcto de Order

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.page.html',
  styleUrls: ['./edit-order.page.scss'],
})
export class EditOrderPage implements OnInit {
  orderId: string = '';
  order: Order = {
    id: '',
    orderDate: new Date(),
    soldBy: '',
    total: 0,
    mgGr: '',
    customerId: '',
  };

  
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.orderId = params['id'];
      this.loadOrder();
    });
  }

  loadOrder() {
    this.orderService.getOrderById(this.orderId).subscribe(
      (data) => {
        this.order = data;
      },
      (error) => {
        console.error('Error fetching order:', error);
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

  updateOrder() {
    this.orderService.updateOrder(this.order).subscribe(
      (data) => {
        console.log('Order updated successfully:', data);
        this.presentToast('Order updated successfully');
      },
      (error) => {
        console.error('Error updating order:', error);
        this.presentToast('An error occurred');
      }
    );
  }
}