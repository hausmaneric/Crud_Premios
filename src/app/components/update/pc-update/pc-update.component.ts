import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pc } from 'src/app/models/pc';
import { Premio } from 'src/app/models/premio';
import { Profissional } from 'src/app/models/profissional';
import { PcService } from 'src/app/services/pc.service';
import { PremioService } from 'src/app/services/premio.service';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-pc-update',
  templateUrl: './pc-update.component.html',
  styleUrls: ['./pc-update.component.css']
})
export class PcUpdateComponent implements OnInit {
  premio: Premio[] = [];
  profissional: Profissional[]  = [];
  pcForm: Pc ={
    id: 0,
    premio: 0,
    nomepremio: '',
    imagepremio: '',
    profissional: 0,
    data: '',
    limite: '',
    pontos: 0,
    utilizado: false,
    nomeprofissional: '',
    valido:true,
    nomeprofissional_1:"",
    nomepremio_1:"",
  }
  premioForm: Premio ={
    id: 0,
    titulo: '',
    descricao: '',
    publicado: '',
    validade: '',
    pontos: 0,
    nivel: 0,
    nivelnome:'',
    quantidade: 0,
    valido: true,
    vencido: false,
    utilizado: 0,
    image: '',
    nivelnome_1:'',
  }
  constructor(private pcService: PcService, private router: Router,private profissionalService: ProfissionalService, private premioService: PremioService, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdPc(id);
    })
  }

  getPremio(){
    setTimeout(() => {
      this.premioService.getPremio().subscribe((data) =>{
        this.premio = data;
      })
    }, 3000);

  }

  getProfissional(){
    setTimeout(() => {
      this.profissionalService.getProfissional().subscribe((data) =>{
        this.profissional = data;
      })
    }, 1000);

  }

  getByIdPc(id:number){
    this.pcService.getByIdPc(id).subscribe((data) => {
      this.getPremio();
      this.getProfissional();
      this.pcForm = Object.values(data)[0]
    })
  }

  selectProfissional(){
    let nomeProfissional!:string
    if(this.pcForm.profissional == 0){
      this.pcForm.nomeprofissional = ""
    }else{
      setTimeout(() => {
        this.profissionalService.getByIdProfissional(this.pcForm.profissional).subscribe((data)=>{
          nomeProfissional = Object.values(data)[0].nome
        })
      }, 1500);
      setTimeout(() => {
        this.pcForm.nomeprofissional = nomeProfissional
      },2000);
    }
  }

  selectPremio(){
    let nomePremio!:string

    if(this.pcForm.premio == 0){
      this.pcForm.nomepremio = "";
    }else{
      setTimeout(() => {
        this.premioService.getByIdPremio(this.pcForm.premio).subscribe((data)=>{
          nomePremio  = Object.values(data)[0].titulo;
        })
      }, 2000);
      setTimeout(() => {
        this.pcForm.nomepremio = nomePremio;
      }, 2500);
    }
  }

  updatePc(){
    // this.selectPremio();
    // this.selectProfissional();
      this.pcService.updatePc(this.pcForm).subscribe({
        next:(data) => {
          this.router.navigate(["pc"]);
        },error:(error)=>{
          console.log(error);
        }
      })

  }

  gotoList() {
    this.router.navigate(['/pc']);
  }
}
