import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];

  constructor( private ms: MoviesService ) {

  }

  ngOnInit() {
    this.ms.getFeature().subscribe( resp => {
      this.peliculasRecientes = resp.results;
    });

    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.ms.getPopulares().subscribe(resp => {

      const arrTemp = [ ...this.peliculasPopulares, ...resp.results ];
      this.peliculasPopulares = arrTemp;
    });
  }
}
