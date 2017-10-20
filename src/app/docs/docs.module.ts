import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { DocsComponent } from './docs.component';
import { DropshippingComponent } from './dropshipping/dropshipping.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DevComponent } from './dev/dev.component';
import { documentacaoRoteamento } from './docs.routing';
import { DropshippingMenuComponent } from './dropshipping/menu/menu.component';

@NgModule({
  imports: [
    MarkdownToHtmlModule.forRoot(),
    CommonModule,
    RouterModule,
    CompartilhadoModule,
    documentacaoRoteamento
  ],
  declarations: [
    DocsComponent,
    DevComponent,
    EmpresaComponent,
    DropshippingComponent,
    DropshippingMenuComponent
  ],
  exports: [
    DropshippingMenuComponent
  ]
})
export class DocsModule { }
