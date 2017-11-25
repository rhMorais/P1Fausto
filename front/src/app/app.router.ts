import {Routes, RouterModule} from '@angular/router'

import { AtendentesListaComponent } from './atendentes/atendentes-lista/atendentes-lista.component';
import { AtendentesFormComponent} from './atendentes/atendentes-form/atendentes-form.component';

import { VendedoresListaComponent } from './vendedores/vendedores-lista/vendedores-lista.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { PedidosListaComponent } from './pedidos/pedidos-lista/pedidos-lista.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';


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
        path: 'pedidos',
        component: PedidosListaComponent
    },

    {
        path: 'vendedores',
        component: VendedoresListaComponent
    },

    {
        path: 'vendedores',
        component: VendedoresListaComponent
    },
]

export const RoutingModule = RouterModule.forRoot(routes);