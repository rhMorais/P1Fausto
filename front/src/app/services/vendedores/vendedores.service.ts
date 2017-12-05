import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


export class Vendedores {
  public _id: string;
  public nome: string;
  public telefone: string;
  public celular: string;
  public empresa: string;
}

@Injectable()
export class VendedoresService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/vendedores')
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/vendedores/' + id)
  }

  public salvar(a: Vendedores){
    if(a._id){
      return this.http.put('http://localhost:3000/vendedores', a)
    }
    else{
      return this.http.post('http://localhost:3000/vendedores', a)
    }
  }

  public excluir(id: string){
    return this.http.delete('http://localhost:3000/vendedores/' + id)
  }
}



