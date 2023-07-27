// create-customer.page.ts
import { Component } from '@angular/core';
import { Customer } from '../../../../shared/models/customer.model';
import { CustomerService } from '../../../../core/services/customer.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-createcustomer',
  templateUrl: 'create-customer.page.html',
  styleUrls: ['create-customer.page.scss'],
})
export class CreateCustomerPage {
  newCustomer: Customer = {
    _id: '',
    cFirstName: '',
    cLastName: '',
    cPhone: '',
    cStreet: '',
    cZipCode: '',
  };

  constructor(private customerService: CustomerService, private toastController: ToastController) {}

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
    this.newCustomer._id = `${randomPart}${timestampPart}`;
  }

  createCustomer() {
    this.generateUniqueId();
    this.customerService.createCustomer(this.newCustomer).subscribe(
      //
      (response) => {
        console.log('Cliente creado exitosamente:', response);
        this.presentToast('Cliente creado exitosamente', 'success'); // Mostrar mensaje de éxito
        // Lógica adicional o redireccionamiento después de crear el cliente
      },
      (error) => {
        console.error('Error al crear el cliente:', error);
        this.presentToast('Error al crear el cliente', 'danger'); // Mostrar mensaje de error
      }
    );
  }
}
