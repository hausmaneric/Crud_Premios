import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { DateAdapter, MatDateFormats, NativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ponto } from 'src/app/models/ponto';
import { Profissional } from 'src/app/models/profissional';
import { PontoService } from 'src/app/services/ponto.service';
import { ProfissionalService } from 'src/app/services/profissional.service';

@Component({
  selector: 'app-ponto-create',
  templateUrl: './ponto-create.component.html',
  styleUrls: ['./ponto-create.component.css']
})
export class PontoCreateComponent implements OnInit {

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

  saldoPonto: number = this.pontoForm.quantidade - this.pontoForm.utilizado;

  constructor(private pontoService: PontoService, private profissionalService: ProfissionalService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.getProfissional();
  }

  getProfissional(){
    setTimeout(() => {
      this.profissionalService.getProfissional().subscribe((data) =>{
        this.profissional = data;
      })
    }, 1000);

  }

  selectProfissional(){
    let nomeProfissional!:string
    if(this.pontoForm.profissional == 0){
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

  createPonto(){
    // this.selectProfissional();
      this.pontoService.createPonto(this.pontoForm).subscribe({
        next:(data) => {
          this.router.navigate(["ponto"])
        },error: (error) =>{
          console.log(error);
        }
      })
  }

  gotoList() {
    this.router.navigate(['/ponto']);
  }
}
