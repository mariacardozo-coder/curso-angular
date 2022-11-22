import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  title = 'contador app';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

}
