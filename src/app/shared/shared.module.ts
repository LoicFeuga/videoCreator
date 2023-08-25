import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  SimpleCategorieCodeRenduComponent
} from './layout/simple-categorie-code-rendu/simple-categorie-code-rendu.component';
import { BoxShadowComponent } from './posts/box-shadow/box-shadow.component';

const COMPONENTS = [SimpleCategorieCodeRenduComponent, BoxShadowComponent]

@NgModule({
  declarations: [...COMPONENTS ],
  imports: [
    CommonModule,
  ],
  exports: [...COMPONENTS]
})
export class SharedModule {
}
