import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VendedoresListaComponent } from './vendedores/vendedores-lista/vendedores-lista.component';
import { AtendentesListaComponent } from './atendentes/atendentes-lista/atendentes-lista.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { PedidosListaComponent } from './pedidos/pedidos-lista/pedidos-lista.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';
import { MenuComponent } from './nav/menu/menu.component';
import { AtendentesFormComponent } from './atendentes/atendentes-form/atendentes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VendedoresListaComponent,
    AtendentesListaComponent,
    ClientesListaComponent,
    PedidosListaComponent,    
    ProdutosListaComponent,
    MenuComponent,
    AtendentesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
