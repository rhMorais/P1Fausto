import { Routes, RouterModule } from '@angular/router'

import { AtendentesListaComponent } from './atendentes/atendentes-lista/atendentes-lista.component';
import { AtendentesFormComponent} from './atendentes/atendentes-form/atendentes-form.component';

import { VendedoresListaComponent } from './vendedores/vendedores-lista/vendedores-lista.component';
import { VendedoresFormComponent } from './vendedores/vendedores-form/vendedores-form.component';

import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';

import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';

import { PedidosListaComponent } from './pedidos/pedidos-lista/pedidos-lista.component';

const routes : Routes = [
    {
        path: '',
        component: AtendentesListaComponent,        
    },
    
    {
        path: 'atendentes',
        component: AtendentesListaComponent
    },

    {
        path: 'atendentes/novo',
        component: AtendentesFormComponent
    },

    {
        path: 'atendentes/:id',
        component: AtendentesFormComponent
    },

    {
        path: 'clientes',
        component: ClientesListaComponent
    },

    {
        path: 'clientes/novo',
        component: ClientesFormComponent
    },

    {
        path: 'clientes/:id',
        component: ClientesFormComponent
    },

    {
        path: 'vendedores',
        component: VendedoresListaComponent
    },

    {
        path: 'vendedores/novo',
        component: VendedoresFormComponent
    },

    {
        path: 'vendedores/:id',
        component: VendedoresFormComponent
    },

    {
        path: 'produtos',
        component: ProdutosListaComponent
    },

    {
        path: 'produtos/novo',
        component: ProdutosFormComponent
    },

    {
        path: 'produtos/:id',
        component: ProdutosFormComponent
    },

    {
        path: 'pedidos',
        component: PedidosListaComponent
    },
]

export const RoutingModule = RouterModule.forRoot(routes);