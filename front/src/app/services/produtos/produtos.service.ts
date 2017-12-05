import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


export class Produtos {
  public _id: string;
  public descricao: string;
  public preco: Number;
  public vendedor: string;
}

@Injectable()
export class ProdutosService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/produtos')
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/produtos/' + id)
  }

  public salvar(a: Produtos){
    if(a._id){
      return this.http.put('http://localhost:3000/produtos', a)
    }
    else{
      return this.http.post('http://localhost:3000/produtos', a)
    }
  }

  public excluir(id: string){
    return this.http.delete('http://localhost:3000/produtos/' + id)
  }
}



