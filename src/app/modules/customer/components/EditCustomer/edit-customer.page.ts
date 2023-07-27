// edit-customer.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Customer } from '../../../../shared/models/customer.model';
import { CustomerService } from '../../../../core/services/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {
  customerId: string = '';
  customer: Customer = {
    _id: '',
    cFirstName: '',
    cLastName: '',
    cPhone: '',
    cStreet: '',
    cZipCode: '',
  };

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.customerId = params['id'];
      this.loadCustomer();
    });
  }

  loadCustomer() {
    this.customerService.getCustomerById(this.customerId).subscribe(
      (data) => {
        this.customer = data;
      },
      (error) => {
        console.error('Error fetching customer:', error);
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

  updateCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe(
      (data) => {
        console.log('Customer updated successfully:', data);
        this.presentToast('Customer updated successfully');
      },
      (error) => {
        console.error('Error updating customer:', error);
        this.presentToast('An error occurred');
      }
    );
  }
}
