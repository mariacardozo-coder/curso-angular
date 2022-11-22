import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'iroman', 'hulk', 'Thor', 'superman', 'capitan america'];
  heroeborrado: string = '';

  borrarHeroe() {
   this.heroeborrado =  this.heroes.shift() || '';

  }

}
