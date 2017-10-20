import { RouterModule, Routes } from '@angular/router';

import { DropshippingComponent } from './dropshipping/dropshipping.component';
import { DevComponent } from './dev/dev.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { DocsComponent } from './docs.component';

const documentacaoRotas: Routes = [
    {
        path: '', component: DocsComponent
    },
    {
        path: 'empresa', component: EmpresaComponent
    },
    {
        path: 'desenvolvedor', component: DevComponent
    },
    {
        path: 'dropshipping', component: DropshippingComponent
    },
    {
        path: 'dropshipping/:id', component: DropshippingComponent
    }
];

export const documentacaoRoteamento = RouterModule.forChild(documentacaoRotas);