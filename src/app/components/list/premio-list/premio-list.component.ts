import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Premio } from 'src/app/models/premio';
import { PremioService } from 'src/app/services/premio.service';

declare var window: any;

@Component({
  selector: 'app-premio-list',
  templateUrl: './premio-list.component.html',
  styleUrls: ['./premio-list.component.css']
})
export class PremioListComponent implements OnInit {

  allPremio: Premio[] = [];
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
    valido: false,
    vencido: false,
    utilizado: 0,
    image: '',
    nivelnome_1:''
  }

  panelOpenState = false;

  constructor(private premioService: PremioService, private router: Router) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.getPremio();
  }

  getPremio(){
    this.premioService.getPremio().subscribe((data) =>{
      this.allPremio = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.premioService.deletePremio(id).subscribe(res=>{
        this.getPremio();
      })
    }
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  deletePremio(){
    this.premioService.deletePremio(this.idToDelete).subscribe((data) => {
      this.allPremio = this.allPremio.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

  searchPremioValido(){
    let valido = 0;
    if(this.premioForm.valido == true){
      valido = 0;
      this.getPremio();
    }else{
      valido = 1;
      this.premioService.searchPremioValido(valido).subscribe((data)=>{
        this.allPremio = Object.values(data);
      })
    }
  }

  searchPremio(){
    this.premioService.searchPremio(this.premioForm.titulo).subscribe((data) =>{
      this.allPremio = Object.values(data);
      this.premioForm.titulo = '';
    })
  }
}
