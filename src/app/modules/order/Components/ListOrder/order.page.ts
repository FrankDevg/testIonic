import { Component } from '@angular/core';
import { Order } from '../../../../shared/models/order.model';
import { Router } from '@angular/router';
import { OrderService } from '../../../../core/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss'],
})
export class OrderPage {
  orders: Order[] | undefined;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log(this.orders);
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  redirectToEditOrder(orderId: string) {
    this.router.navigateByUrl(`/orderEdit/${orderId}`);
  }
}
