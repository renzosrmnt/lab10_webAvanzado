import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @ViewChild('formulario', { static: true }) formulario!: NgForm;

  nombre: String = '';
  email: String= '';

  onSubmit(){
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);

    const ventanaNueva = window.open('about:blank', '_blank');
    if (ventanaNueva) {
      ventanaNueva.document.write(`<h1>Nombre: ${this.nombre}</h1>`);
      ventanaNueva.document.write(`<h1>Email: ${this.email}</h1>`);
    } else {
      console.error('No se pudo abrir la ventana emergente.');
    }
  }

  confirmarEnvio() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      this.onSubmit();
    }
  }

}
