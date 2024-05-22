import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from "./formulario/formulario.component";
import { GaleriaComponent } from "./galeria/galeria.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MiDirectivaDirective, CommonModule, FormularioComponent, GaleriaComponent]
})
export class AppComponent {
  onSubmit() {
    console.log('El formulario fue enviado.');
  }
  title = 'lab10';
}
