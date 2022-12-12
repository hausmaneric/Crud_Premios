import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ponto } from 'src/app/models/ponto';
import { Profissional } from 'src/app/models/profissional';
import { PontoService } from 'src/app/services/ponto.service';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-ponto-update',
  templateUrl: './ponto-update.component.html',
  styleUrls: ['./ponto-update.component.css']
})
export class PontoUpdateComponent implements OnInit {
  profissional: Profissional[] = [];
  pontoForm: Ponto ={
    id: 0,
    profissional: 0,
    data: '',
    validade: '',
    saldo: 0,
    quantidade: 0,
    informacao: '',
    utilizado: 0,
    nomeprofissional: '',
    valido: true,
    nomeprofissional_1: '',
  }
  constructor(private pontoService: PontoService,private profissionalService: ProfissionalService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdPonto(id);
    })
  }

  getProfissional(){
    setTimeout(() => {
      this.profissionalService.getProfissional().subscribe((data) =>{
        this.profissional = data;
      })
    }, 2000);
  }

  getByIdPonto(id:number){
    this.pontoService.getByIdPonto(id).subscribe((data) => {
      this.getProfissional();
      this.pontoForm = Object.values(data)[0]
    })
  }

  selectProfissional(){
    let nomeProfissional!:string
    if(this.pontoForm.profissional == 0) {
      this.pontoForm.nomeprofissional = ""
    }else{
      setTimeout(() => {
        this.profissionalService.getByIdProfissional(this.pontoForm.profissional).subscribe((data)=>{
          nomeProfissional = Object.values(data)[0].nome
        })
      }, 500);
      setTimeout(() => {
        this.pontoForm.nomeprofissional = nomeProfissional
      }, 1000);
    }
  }

  updatePonto(){
    // this.selectProfissional();
      this.pontoService.updatePonto(this.pontoForm).subscribe({
        next:(data) => {
          this.router.navigate(["/ponto"]);
        },error:(error)=>{
          console.log(error);
        }
      })
  }

  gotoList() {
    this.router.navigate(['/ponto']);
  }

}
