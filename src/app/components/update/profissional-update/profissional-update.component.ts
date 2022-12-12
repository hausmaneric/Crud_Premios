import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from 'src/app/models/nivel';
import { Profissional } from 'src/app/models/profissional';
import { Segmento } from 'src/app/models/segmento';
import { NivelService } from 'src/app/services/nivel.service';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-profissional-update',
  templateUrl: './profissional-update.component.html',
  styleUrls: ['./profissional-update.component.css']
})
export class ProfissionalUpdateComponent implements OnInit {
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
  constructor(private profissonalService: ProfissionalService,private nivelService: NivelService,private segmentoService: SegmentoService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdProfissional(id);
    })
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

  getByIdProfissional(id:number){
    this.profissonalService.getByIdProfissional(id).subscribe((data) => {
      this.getNivel();
      this.getSegmento();
      this.profissionalForm = Object.values(data)[0];
    })
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

  updateProfissional(){
    // this.selectSegmento();
    // this.selectNivel();
      this.profissonalService.updateProfissional(this.profissionalForm).subscribe({
        next:(data) => {
          this.router.navigate(['/profissional']);
        },error:(error)=>{
          console.log(error);
        }
      })
  }

  gotoList() {
    this.router.navigate(['/profissional']);
  }

}
