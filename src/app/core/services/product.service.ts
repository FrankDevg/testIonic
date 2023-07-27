import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model'; 
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:7044/api/Product'; 

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  createProduct(product: Product): Observable<any> { 
    return this.http.post(this.apiUrl, product);
  }

  getProductById(id: string) { 
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put(`${this.apiUrl}/${product._id}`, product);
  }
}
