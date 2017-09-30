import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {
  private produtos 
  private title = 'Lista de Produtos'

  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/produtos')
    .subscribe(dados => this.produtos = dados)
  }  
  ngOnInit() {
  }

}
