import { Component, OnInit } from '@angular/core';
import {VendedoresService} from '../../services/vendedores/vendedores.service';
import * as moment from 'moment'

@Component({
  selector: 'app-vendedores-lista',
  templateUrl: './vendedores-lista.component.html',
  styleUrls: ['./vendedores-lista.component.css'],
  providers: [VendedoresService]
})
export class VendedoresListaComponent implements OnInit {
  
  private vendedores : any
  private title = 'Lista de Vendedores'

  constructor(private service: VendedoresService) { 
    this.atualizarLista()
  }  

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.vendedores = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir este vendedor?')){
      this.service.excluir(id).subscribe(() => this.atualizarLista())
    }
  }

  ngOnInit() {
  }
}
