import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Premio } from '../models/premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private http:HttpClient) { }

  getPremio(){
    return this.http.get<Premio[]>("http://18.231.197.66/api/premio");
  }

  createPremio(payLoad:Premio){
    return this.http.post<Premio>("http://18.231.197.66/api/premio", payLoad);
  }

  getByIdPremio(id:number){
    return this.http.get<Premio>(`http://18.231.197.66/api/premio/${id}`);
  }

  updatePremio(payLoad:Premio){
    return this.http.put(`http://18.231.197.66/api/premio/${payLoad.id}`,payLoad);
  }

  deletePremio(id:number){
    return this.http.delete<Premio>(`http://18.231.197.66/api/premio/${id}`);
  }

  searchPremioValido(valido:number){
    return this.http.get<Premio>(`http://18.231.197.66/api/premiosearchvalido/${valido}`);
  }

  searchPremio(titulo:string){
    return this.http.get<Premio>(`http://18.231.197.66/api/premiosearch/${titulo}`);
  }
}
