import { Component, OnInit } from '@angular/core';
import { AtendentesService, Atendentes } from '../../services/atendentes/atendentes.service';
import * as moment from 'moment'

@Component({
  selector: 'app-atendentes-lista',
  templateUrl: './atendentes-lista.component.html',
  styleUrls: ['./atendentes-lista.component.css'],
  providers: [AtendentesService]
})
export class AtendentesListaComponent implements OnInit {
 
  private atendentes : any
  private title = 'Lista de Atendentes'

  constructor(private service: AtendentesService) {
    this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.atendentes = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmente excluir este atendente?')){
      this.service.excluir(id).subscribe(() => this.atualizarLista())
    }
  }
   
  ngOnInit() {
  }
}
