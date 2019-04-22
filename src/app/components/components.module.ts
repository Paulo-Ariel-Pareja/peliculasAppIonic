import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesBackdropComponent } from './slides-backdrop/slides-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlidesPosterComponent } from './slides-poster/slides-poster.component';
import { SlidesParesComponent } from './slides-pares/slides-pares.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  entryComponents: [
    DetailComponent
  ],
  declarations: [
    SlidesBackdropComponent,
    SlidesPosterComponent,
    SlidesParesComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlidesBackdropComponent,
    SlidesPosterComponent,
    SlidesParesComponent,
    DetailComponent
  ]
})
export class ComponentsModule { }
