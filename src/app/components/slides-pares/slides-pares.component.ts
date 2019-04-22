import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slides-pares',
  templateUrl: './slides-pares.component.html',
  styleUrls: ['./slides-pares.component.scss'],
})
export class SlidesParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  onClick() {
    this.cargarMas.emit();
  }

  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
