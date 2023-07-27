// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../shared/models/order.model'; 
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'https://localhost:7044/api/Order'; 

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  createOrder(order: Order): Observable<any> { 
    return this.http.post(this.apiUrl, order);
  }

  getOrderById(id: string) { 
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  updateOrder(order:Order) {
    return this.http.put(`${this.apiUrl}/${order.id}`, order);
  }
}
