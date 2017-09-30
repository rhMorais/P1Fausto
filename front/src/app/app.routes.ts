import {Routes, RouterModule} from '@angular/router'

import { VendedoresListaComponent } from './vendedores/vendedores-lista/vendedores-lista.component';
import { AtendentesListaComponent } from './atendentes/atendentes-lista/atendentes-lista.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { PedidosListaComponent } from './pedidos/pedidos-lista/pedidos-lista.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';


const routes : Routes = [
    {
        path: '',
        component: VendedoresListaComponent,        
    },

    {
        path: 'vendedores',
        component: VendedoresListaComponent
    },
    
    {
        path: 'atendentes',
        component: AtendentesListaComponent
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
    }
]

export const RoutingModule = RouterModule.forRoot(routes);