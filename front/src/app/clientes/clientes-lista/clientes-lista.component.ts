import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  private clientes : any
  private title = 'Lista de Clientes'

  constructor(private service: ClientesService) {
    this.atualizarLista()
  }

  atualizarLista(){
    this.service.listarTodos().subscribe((dados: Response) => this.clientes = dados)
  }

  excluir(id: string){
    if(confirm('Deseja realmentente excluir este cliente?')){
      this.service.excluir(id).subscribe(() => this.atualizarLista())
    }
  }

  ngOnInit() {
  }

}
