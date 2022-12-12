import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nivel } from 'src/app/models/nivel';
import { NivelService } from 'src/app/services/nivel.service';
@Component({
  selector: 'app-nivel-lists',
  templateUrl: './nivel-lists.component.html',
  styleUrls: ['./nivel-lists.component.css']
})
export class NivelListsComponent implements OnInit {
  allNivel: Nivel[] = [];

  constructor(private nivelService: NivelService, private router: Router) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.getNivel();
  }

  getNivel(){
    this.nivelService.getNivel().subscribe((data) =>{
      this.allNivel = data;
    })
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.nivelService.deleteNivel(id).subscribe(res=>{
        this.getNivel();
      })
    }
  }

  deleteProfissional(){
    this.nivelService.deleteNivel(this.idToDelete).subscribe((data) => {
      this.allNivel = this.allNivel.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

  createProfissional(){
    this.router.navigate(['nivelCreate']);
  }

}
