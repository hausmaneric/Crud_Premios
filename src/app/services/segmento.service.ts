import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Segmento } from '../models/segmento';

@Injectable({
  providedIn: 'root'
})
export class SegmentoService {

  constructor(private http:HttpClient) { }

  getSegmento(){
    return this.http.get<Segmento[]>("http://18.231.197.66/api/segmentos");
  }

  createSegmento(payLoad:Segmento){
    return this.http.post<Segmento>("http://18.231.197.66/api/segmentos", payLoad);
  }

  getByIdSegmento(id:number){
    return this.http.get<Segmento>(`http://18.231.197.66/api/segmentos/${id}`);
  }

  updateSegmento(payLoad:Segmento){
    return this.http.put(`http://18.231.197.66/api/segmentos/${payLoad.id}`,payLoad);
  }

  deleteSegmento(id:number){
    return this.http.delete<Segmento>(`http://18.231.197.66/api/segmentos/${id}`);
  }
}
