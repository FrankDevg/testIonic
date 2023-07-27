import { Component } from '@angular/core';
import { Customer } from '../../shared/models/customer.model';
import { CustomerService } from '../../core/services/customer.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   customers: Customer[] | undefined;

  // constructor(private customerService: CustomerService) {}
  constructor(private customerService: CustomerService) {}
  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getCustomers().subscribe(
      (data) => {
        this.customers = data;
        console.log(this.customers)
      },
      (error) => {
        console.error('Error fetching customers:', error);
      }
    );
  }
}
