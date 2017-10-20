import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { BannerMiniComponent } from './banner-mini/banner-mini.component';
import { BannerFullComponent } from './banner-full/banner-full.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    BannerFullComponent,
    BannerMiniComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    BannerFullComponent,
    BannerMiniComponent,
    FooterComponent
  ]
})
export class CompartilhadoModule { }
