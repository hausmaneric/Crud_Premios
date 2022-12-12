import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

declare var window: any;

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  allUsuario: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.getUsuario();
  }

  getUsuario(){
    this.usuarioService.getUsuario().subscribe((data) =>{
      this.allUsuario = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.usuarioService.deleteUsuario(id).subscribe(res=>{
        this.getUsuario();
      })
    }
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  deleteUsuario(){
    this.usuarioService.deleteUsuario(this.idToDelete).subscribe((data) => {
      this.allUsuario = this.allUsuario.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

}
