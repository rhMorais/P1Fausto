import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../../services/produtos/produtos.service'
import * as moment from 'moment'

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css'],
  providers: [ProdutosService]
})
export class ProdutosListaComponent implements OnInit {

  private produtos : any
  private title = 'Lista de Produtos'

  constructor(private service: ProdutosService) { 
    this.atualizarLista()
  }  

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.produtos = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir este produto?')){
      this.service.excluir(id).subscribe(() => this.atualizarLista())
    }
  }

  ngOnInit() {
  }

}
