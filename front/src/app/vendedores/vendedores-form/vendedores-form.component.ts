import { Component, OnInit } from '@angular/core';
import { Vendedores, VendedoresService } from '../../services/vendedores/vendedores.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-vendedores-form',
  templateUrl: './vendedores-form.component.html',
  styleUrls: ['./vendedores-form.component.css'],
  providers: [VendedoresService]
})
export class VendedoresFormComponent implements OnInit {

  private title = 'Novo vendedor'
  private model : Vendedores
  private categorias : any
  
  constructor(
    private ts: VendedoresService, 
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.model = new Vendedores()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => {
        if(params['id']) {
          // Buscamos o objeto para edição
          this.ts.obterPorId(params['id']).subscribe(
            (existente: Vendedores) => this.model = existente
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
      () => roteador.navigate(['/vendedores']),
      erro => console.error(erro)
    )
  }
  
}



