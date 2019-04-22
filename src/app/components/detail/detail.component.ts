import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  pelicula: PeliculaDetalle = {};
  estrella = 'star-outline';
  actores: Cast[] = [];
  oculto: 150;
  slieOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  sinImagen = 'assets/no-avatar.jpg';

  @Input() id;

  constructor(  private ms: MoviesService,
                private modalCtrl: ModalController,
                private dataLocal: DataLocalService ) { }

  ngOnInit() {

    this.dataLocal.existePelicula( this.id )
          .then( existe => this.estrella = ( existe ) ? 'star' : 'star-outline' );

    this.ms.getPeliculaDetalle(this.id).subscribe(resp => {
      this.pelicula = resp;
    });

    this.ms.getActoresPelicula(this.id).subscribe(resp => {
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataLocal.guardarPelicula(this.pelicula)
    this.estrella = ( existe ) ? 'star' : 'star-outline';
  }

}
