// customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../shared/models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'https://localhost:7044/api/Customer';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }
  createCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.apiUrl, customer);
  }
  getCustomerById(id: string) {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(`${this.apiUrl}/${customer._id}`, customer);
  }
}
