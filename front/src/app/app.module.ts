import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AtendentesListaComponent } from './atendentes/atendentes-lista/atendentes-lista.component';
import { AtendentesFormComponent } from './atendentes/atendentes-form/atendentes-form.component';

import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';

import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';

import { VendedoresListaComponent } from './vendedores/vendedores-lista/vendedores-lista.component';
import { VendedoresFormComponent } from './vendedores/vendedores-form/vendedores-form.component';

import { PedidosListaComponent } from './pedidos/pedidos-lista/pedidos-lista.component';
import { MenuComponent } from './nav/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,

    AtendentesListaComponent,
    AtendentesFormComponent,
    
    ClientesListaComponent,
    ClientesFormComponent,

    ProdutosListaComponent,
    ProdutosFormComponent,

    VendedoresListaComponent,
    VendedoresFormComponent,

    PedidosListaComponent,    
    MenuComponent,
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
