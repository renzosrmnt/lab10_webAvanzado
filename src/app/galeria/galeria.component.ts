import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  items = [
    {
      imageUrl: 'assets/images/juego1.jpg',
    },
    {
      imageUrl: 'assets/images/juego2.jpg',
    },
    {
      imageUrl: 'assets/images/juego3.jpg',
    },
    {
      imageUrl: 'assets/images/juego4.jpeg',
    },
    {
      imageUrl: 'assets/images/juego5.jpg',
    },
    {
      imageUrl: 'assets/images/juego6.jpg',
    },
  ];

  constructor(){}

  ngOnInit(): void {
  }

}
