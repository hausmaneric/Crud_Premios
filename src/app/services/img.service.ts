import { Imagens } from './../models/imagens';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor(private http:HttpClient) { }

  getImage(){
    return this.http.get<Imagens[]>("http://18.231.197.66:8080/api/image ");
  }

  createImage(payLoad:Imagens){
    return this.http.post<Imagens>("http://18.231.197.66:8080/api/image", payLoad);
  }

  getByIdImage(id:number){
    return this.http.get<Imagens>(`http://18.231.197.66:8080/api/image/${id}`);
  }

  updateImage(payLoad:Imagens){
    return this.http.put(`http://18.231.197.66:8080/api/image/${payLoad.id}`,payLoad);
  }

  deleteImage(id:number){
    return this.http.delete<Imagens>(`http://18.231.197.66:8080/api/image/${id}`);
  }

  searchImageProduct(premio:number){
    const baseUrl="http://18.231.197.66:8080/api/imagep/"+premio;
    return this.http.get<Imagens>(baseUrl);
  }
}
