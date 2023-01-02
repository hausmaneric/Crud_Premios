import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http:HttpClient) { }

  getProfissional(){
    return this.http.get<Profissional[]>("http://18.231.197.66/api/profissional",);
  }

  createProfissional(payLoad:Profissional){
    return this.http.post<Profissional>("http://18.231.197.66f/api/profissional", payLoad, {observe: 'response'});
  }

  getByIdProfissional(id:number){
    return this.http.get<Profissional>(`http://18.231.197.66/api/profissional/${id}`);
  }

  updateProfissional(payLoad:Profissional){
    return this.http.put(`http://18.231.197.66/api/profissional/${payLoad.id}`,payLoad);
  }

  deleteProfissonal(id:number){
    return this.http.delete<Profissional>(`http://18.231.197.66/api/profissional/${id}`);
  }

  searchProfissional(nome:string){
    return this.http.get<Profissional>(`http://18.231.197.66/api/profissionalsearch/${nome}`);
  }
}
