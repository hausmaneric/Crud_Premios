import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nivel } from '../models/nivel';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  constructor(private http:HttpClient) { }

  getNivel(){
    return this.http.get<Nivel[]>("http://18.231.197.66:8080/api/nivel ");
  }

  createNivel(payLoad:Nivel){
    return this.http.post<Nivel>("http://18.231.197.66:8080/api/nivel ", payLoad);
  }

  getByIdNivel(id:number){
    return this.http.get<Nivel>(`http://18.231.197.66:8080/api/nivel/${id}`);
  }

  updateNivel(payLoad:Nivel){
    return this.http.put(`http://18.231.197.66:8080/api/nivel/${payLoad.id}`,payLoad);
  }

  deleteNivel(id:number){
    return this.http.delete<Nivel>(`http://18.231.197.66:8080/api/nivel/${id}`);
  }
}
