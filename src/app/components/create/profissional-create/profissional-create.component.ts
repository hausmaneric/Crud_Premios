import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Nivel } from 'src/app/models/nivel';
import { Profissional } from 'src/app/models/profissional';
import { Segmento } from 'src/app/models/segmento';
import { NivelService } from 'src/app/services/nivel.service';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-profissional-create',
  templateUrl: './profissional-create.component.html',
  styleUrls: ['./profissional-create.component.css']
})
export class ProfissionalCreateComponent implements OnInit {
  segmento: Segmento[] = [];
  nivel: Nivel[] = [];

  profissionalForm: Profissional ={
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    segmento: 0,
    data: '',
    ativo: true,
    nivel: 0,
    image: '',
    nomenivel: '',
    nomesegmento: '',
    nomenivel_1:'',
    nomesegmento_1: ''
  }

  constructor(private profissonalService: ProfissionalService,private nivelService: NivelService,private segmentoService: SegmentoService, private route: Router,private dateAdapter: DateAdapter<Date>, private http: HttpClient) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.getNivel();
    this.getSegmento();
  }

  getNivel(){
    setTimeout(() => {
      this.nivelService.getNivel().subscribe((data) =>{
        this.nivel = data;
      })
    }, 2000);

  }

  getSegmento(){
    setTimeout(() => {
      this.segmentoService.getSegmento().subscribe((data) =>{
        this.segmento = data;
      })
    }, 2000);

  }

  selectNivel(){
    let nomeNivel!:string
    if(this.profissionalForm.nivel == 0){
      this.profissionalForm.nomenivel = ""
    }else{
      setTimeout(() => {
        this.nivelService.getByIdNivel(this.profissionalForm.nivel).subscribe((data)=>{
          nomeNivel = Object.values(data)[0].nome
        })
      }, 500);

      setTimeout(() => {
        this.profissionalForm.nomenivel = nomeNivel
      }, 1000);
    }
  }

  selectSegmento(){
    let nomeSegmento!:string
    if(this.profissionalForm.segmento == 0){
      this.profissionalForm.nomesegmento = ""
    }else{
      setTimeout(() => {
        this.segmentoService.getByIdSegmento(this.profissionalForm.segmento).subscribe((data)=>{
          nomeSegmento = Object.values(data)[0].nome
        })
      }, 500);
      setTimeout(() => {
        this.profissionalForm.nomesegmento = nomeSegmento
      }, 1000);
    }
  }

  createProfissioanl(){
    // this.selectNivel();
    // this.selectSegmento();
      this.profissonalService.createProfissional(this.profissionalForm).subscribe({
        next:(data) => {
          if(data.status == 201){
            this.route.navigate(["profissional"])
          }
        },error: (error) =>{
          if(error.status == 404) {
            console.log(error);
          }

        }
      })
  }

  gotoList() {
    this.route.navigate(['/profissional']);
  }

}

