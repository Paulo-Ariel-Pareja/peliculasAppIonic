import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slides-backdrop',
  templateUrl: './slides-backdrop.component.html',
  styleUrls: ['./slides-backdrop.component.scss'],
})
export class SlidesBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  async verDetalle( id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }
}
