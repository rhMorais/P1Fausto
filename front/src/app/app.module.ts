import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendedoresListaComponent } from './vendedores/vendedores-lista/vendedores-lista.component';
import { AtendentesListaComponent } from './atendentes/atendentes-lista/atendentes-lista.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { PedidosListaComponent } from './pedidos/pedidos-lista/pedidos-lista.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    VendedoresListaComponent,
    AtendentesListaComponent,
    ClientesListaComponent,
    PedidosListaComponent,    
    ProdutosListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
