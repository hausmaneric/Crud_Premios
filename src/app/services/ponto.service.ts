import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ponto } from '../models/ponto';

@Injectable({
  providedIn: 'root'
})
export class PontoService {

  constructor(private http:HttpClient) { }

  getPonto(){
    return this.http.get<Ponto[]>("http://18.231.197.66:8080/api/ponto");
  }

  createPonto(payLoad:Ponto){
    return this.http.post<Ponto>("http://18.231.197.66:8080/api/ponto", payLoad);
  }

  getByIdPonto(id:number){
    return this.http.get<Ponto>(`http://18.231.197.66:8080/api/ponto/${id}`);
  }

  updatePonto(payLoad:Ponto){
    return this.http.put(`http://18.231.197.66:8080/api/ponto/${payLoad.id}`,payLoad);
  }

  deletePonto(id:number){
    return this.http.delete<Ponto>(`http://18.231.197.66:8080/api/ponto/${id}`);
  }

  searchPonto(nomeprofissional:string){
    return this.http.get<Ponto>(`http://18.231.197.66:8080/api/pontosearch/${nomeprofissional}`);
  }

  searchPontoValido(valido:number){
    return this.http.get<Ponto>(`http://18.231.197.66:8080/api/pontosearchvalido/${valido}`);
  }
}
