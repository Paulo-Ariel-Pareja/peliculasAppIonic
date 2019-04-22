import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slides-poster',
  templateUrl: './slides-poster.component.html',
  styleUrls: ['./slides-poster.component.scss']
})
export class SlidesPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

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
