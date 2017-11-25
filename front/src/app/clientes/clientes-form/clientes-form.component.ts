import { Component, OnInit } from '@angular/core';
import { Clientes, ClientesService } from '../../services/clientes/clientes.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
  providers: [ClientesService]
})
export class ClientesFormComponent implements OnInit {

  private title = 'Novo cliente'
  private model : Clientes
  
  constructor(
    private ts: ClientesService, 
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.model = new Clientes()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => {
        if(params['id']) {
          // Buscamos o objeto para edição
          this.ts.obterPorId(params['id']).subscribe(
            (existente: Clientes) => this.model = existente
          )
        }
      }
    )
  
  }

  enviar() {
    // Preservando o roteador para evitar que a referência ao objeto se perca
    let roteador = this.router

    this.ts.salvar(this.model).subscribe(
      // Após a inserção ou atualização de um objeto, retorna à página de listagem
      () => roteador.navigate(['/clientes']),
      erro => console.error(erro)
    )
  }
  
}



