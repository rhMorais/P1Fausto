import { Component, OnInit } from '@angular/core';
import { Produtos, ProdutosService } from '../../services/produtos/produtos.service';
import { Vendedores, VendedoresService } from '../../services/vendedores/vendedores.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css'],
  providers: [ProdutosService, VendedoresService]
})
export class ProdutosFormComponent implements OnInit {

  private title = 'Novo produto'
  private model : Produtos
  private vendedores : any
  
  constructor(
    private ts: ProdutosService, 
    private cs: VendedoresService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  
    this.model = new Produtos()
    this.model.vendedor = ''

    this.vendedores = this.cs.listarTodos()

    this.aRoute.params.subscribe(
      // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
      params => {
        if(params['id']) {
          // Buscamos o objeto para edição
          this.ts.obterPorId(params['id']).subscribe(
            (existente: Produtos) => this.model = existente
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
      () => roteador.navigate(['/produtos']),
      erro => console.error(erro)
    )
    alert("Produto inserido/editado com sucesso!")
    
  }

  voltar() {
    let roteador = this.router
    roteador.navigate(['/produtos'])
  }
  
}



