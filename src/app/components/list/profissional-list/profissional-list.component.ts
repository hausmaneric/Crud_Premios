import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/profissional';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { HomeComponent} from 'src/app/components/home/home.component';
import { FormBuilder, Validators } from '@angular/forms';

declare var window: any;

@Component({
  selector: 'app-profissional-list',
  templateUrl: './profissional-list.component.html',
  styleUrls: ['./profissional-list.component.css']
})
export class ProfissionalListComponent implements OnInit {
  allProfissional: Profissional[] = [];

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
  panelOpenState = false;

  constructor(private profissionalService: ProfissionalService, private router: Router,private _formBuilder: FormBuilder) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.getProfissional();
  }

  getProfissional(){
    this.profissionalService.getProfissional().subscribe((data) =>{
      this.allProfissional = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.profissionalService.deleteProfissonal(id).subscribe(res=>{
        this.getProfissional();
      })
    }
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  deleteProfissional(){
    this.profissionalService.deleteProfissonal(this.idToDelete).subscribe((data) => {
      this.allProfissional = this.allProfissional.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

  createProfissional(){
    this.router.navigate(['profissionalCreate']);
  }

  searchProfissional(){
    this.profissionalService.searchProfissional(this.profissionalForm.nome).subscribe((data) => {
      this.allProfissional = Object.values(data)
    })
  }

}

