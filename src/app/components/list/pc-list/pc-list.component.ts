import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pc } from 'src/app/models/pc';
import { PcService } from 'src/app/services/pc.service';

declare var window: any;

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.css']
})
export class PcListComponent implements OnInit {

  allPc: Pc[] = [];
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
    valido:false,
    nomeprofissional_1:"",
    nomepremio_1:"",
  }

  panelOpenState = false;

  constructor(private pcservice: PcService, private router: Router) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.getPc();
  }

  getPc(){
    this.pcservice.getPc().subscribe((data) =>{
      this.allPc = data;
    })
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.pcservice.deletePc(id).subscribe(res=>{
        this.getPc();
      })
    }
  }

  deletePc(){
    this.pcservice.deletePc(this.idToDelete).subscribe((data) => {
      this.allPc = this.allPc.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

  searchPcValido(){
    let valido = 0;
    if(this.pcForm.valido == true){
      valido = 0;
      this.getPc();
    }else{
      valido = 1;
      this.pcservice.searchPcUtilizado(valido).subscribe((data)=>{
        this.allPc = Object.values(data);
      })
    }
  }

  searchPcProfissional(){
    this.pcservice.searchPcProfissional(this.pcForm.nomeprofissional).subscribe((data) => {
      this.allPc = Object.values(data)
      this.pcForm.nomeprofissional = ''
    })
  }

  searchPcPremio(){
    this.pcservice.searchPcPremio(this.pcForm.nomepremio).subscribe((data) => {
      this.allPc = Object.values(data)
      this.pcForm.nomepremio = ''
    })
  }
}
