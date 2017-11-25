import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


export class Atendentes {
 public _id: string;
 public nome: string;
}

@Injectable()
export class AtendentesService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/atendentes')
  }

  public obterPorId(id: string) {
    return this.http.get('http://localhost:3000/atendentes/' + id)
  }

  public salvar(a: Atendentes){
    if(a._id){
      return this.http.post('http://localhost:3000/atendentes', a)
    }
    else{
      return this.http.put('http://localhost:3000/atendentes', a)
    }
  }

  public excluir(id: string){
    return this.http.delete('http://localhost:3000/atendentes/' + id)
  }
}



