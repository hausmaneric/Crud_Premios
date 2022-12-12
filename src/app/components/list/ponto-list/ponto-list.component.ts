import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ponto } from 'src/app/models/ponto';
import { PontoService } from 'src/app/services/ponto.service';

declare var window: any;

@Component({
  selector: 'app-ponto-list',
  templateUrl: './ponto-list.component.html',
  styleUrls: ['./ponto-list.component.css']
})
export class PontoListComponent implements OnInit {

  allPonto: Ponto[] = [];
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
    valido:false,
    nomeprofissional_1: '',
  }

  utilizado:  number = 0;
  panelOpenState = false;

  constructor(private pontoService: PontoService, private router: Router) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.getPonto();
    // this.utilizado = this.allPonto[0].utilizado

  }

  getPonto(){
    this.pontoService.getPonto().subscribe((data) =>{
      this.allPonto = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.pontoService.deletePonto(id).subscribe(res=>{
        this.getPonto();
      })
    }
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  deletePonto(){
    this.pontoService.deletePonto(this.idToDelete).subscribe((data) => {
      this.allPonto = this.allPonto.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

  createPonto(){
    this.router.navigate(['pontoCreate']);
  }

  searchPontoValido(){
    let valido = 0;
    if(this.pontoForm.valido == true){
      valido = 0;
      this.getPonto();
    }else{
      valido = 1;
      this.pontoService.searchPontoValido(valido).subscribe((data)=>{
        this.allPonto = Object.values(data);
      })
    }
  }

  searchPonto(){
    this.pontoService.searchPonto(this.pontoForm.nomeprofissional).subscribe((data) => {
      this.allPonto = Object.values(data)
      this.pontoForm.nomeprofissional = ''
    })
  }

}
