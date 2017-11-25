import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


export class Clientes {
 public _id: string;
 public nome: string;
 public cpf: string;
 public endereco: string;
 public celular: string;
 public email: string;
}

@Injectable()
export class ClientesService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/clientes')
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/clientes/' + id)
  }

  public salvar(a: Clientes){
    if(a._id){
      return this.http.post('http://localhost:3000/clientes', a)
    }
    else{
      return this.http.put('http://localhost:3000/clientes', a)
    }
  }

  public excluir(id: string){
    return this.http.delete('http://localhost:3000/clientes/' + id)
  }
}



