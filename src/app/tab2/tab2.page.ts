import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] =  ['el señor de los anillos', 'harry potter'];

  constructor(  private ms: MoviesService,
                private modalCtrl: ModalController ) {}

  buscar( event ) {
    this.buscando = true;
    const valor = event.detail.value;
    if ( valor === '') {
      this.peliculas = [];
      this.buscando = false;
      return;
    }
    this.ms.searchMovie(valor).subscribe( resp => {
      this.peliculas = resp['results'];
      this.buscando = false;
    });
  }

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
