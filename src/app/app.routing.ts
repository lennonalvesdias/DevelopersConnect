import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs/docs.component';

const aplicacaoRotas: Routes = [
    {
        path: '', loadChildren: 'app/docs/docs.module#DocsModule'
    },
    {
        path: 'entrar', pathMatch: 'full', redirectTo: '/painel'
    },
    {
        path: 'painel', pathMatch: 'full', redirectTo: '/painel'
    },
    {
        path: 'admin', pathMatch: 'full', redirectTo: '/admin'
    },
    {
        path: '**', pathMatch: 'full', redirectTo: '/'
    }
];

export const aplicacaoRoteamento: ModuleWithProviders = RouterModule.forRoot(aplicacaoRotas);
