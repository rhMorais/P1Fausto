import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vendedores-lista',
  templateUrl: './vendedores-lista.component.html',
  styleUrls: ['./vendedores-lista.component.css']
})
export class VendedoresListaComponent implements OnInit {
  private vendedores 
  private title = 'Lista de Vendedores'

  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/vendedores')
    .subscribe(dados => this.vendedores = dados)
  }  
  ngOnInit() {
  }

}
