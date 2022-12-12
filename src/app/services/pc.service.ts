import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pc } from '../models/pc';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  constructor(private http:HttpClient) { }

  getPc(){
    return this.http.get<Pc[]>("http://18.231.197.66:8080/api/pc");
  }

  createPc(payLoad:Pc){
    return this.http.post<Pc>("http://18.231.197.66:8080/api/pc", payLoad);
  }

  getByIdPc(id:number){
    return this.http.get<Pc>(`http://18.231.197.66:8080/api/pc/${id}`);
  }

  updatePc(payLoad:Pc){
    return this.http.put(`http://18.231.197.66:8080/api/pc/${payLoad.id}`,payLoad);
  }

  deletePc(id:number){
    return this.http.delete<Pc>(`http://18.231.197.66:8080/api/pc/${id}`);
  }

  searchPcProfissional(nomeprofissional:string){
    return this.http.get<Pc>(`http://18.231.197.66:8080/api/pcprofissionalsearch/${nomeprofissional}`);
  }

  searchPcPremio(nomepremio:string){
    return this.http.get<Pc>(`http://18.231.197.66:8080/api/pcpremiosearch/${nomepremio}`);
  }

  searchPcUtilizado(valido:number){
    return this.http.get<Pc>(`http://18.231.197.66:8080/api/pcsearchvalido/${valido}`);
  }
}
