import { Component } from '@angular/core';
import { Customer } from '../../../../shared/models/customer.model';
import { Router } from '@angular/router';
import { CustomerService } from '../../../../core/services/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: 'customer.page.html',
  styleUrls: ['customer.page.scss'],
})
export class CustomerPage {
   customers: Customer[] | undefined;

  // constructor(private customerService: CustomerService) {}
  constructor(private customerService: CustomerService, private router: Router) {}
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
  redirectToEditCustomer(customerId: string) {
    this.router.navigateByUrl(`/customerEdit/${customerId}`);
  }
}
