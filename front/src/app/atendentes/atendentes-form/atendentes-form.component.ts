import { Component, OnInit } from '@angular/core';
import { Atendentes, AtendentesService } from '../../services/atendentes/atendentes.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
 selector: 'app-atendentes-form',
 templateUrl: './atendentes-form.component.html',
 styleUrls: ['./atendentes-form.component.css'],
 providers: [AtendentesService]
})
export class AtendentesFormComponent implements OnInit {

 private title = 'Novo Atendente'
 private model : Atendentes
  constructor(
   private ts: AtendentesService,
   private router: Router,
   private aRoute: ActivatedRoute
 ) { }

 ngOnInit() {
    this.model = new Atendentes()      

   this.aRoute.params.subscribe(
     // Se existir um parâmetro id, significa que queremos editar um objeto já exisente
     params => {
       if(params['id']) {
         // Buscamos o objeto para edição
         this.ts.obterPorId(params['id']).subscribe(
           (existente: Atendentes) => this.model = existente
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
     () => roteador.navigate(['/atendentes']),
     erro => console.error(erro)
   )
 }
 }



