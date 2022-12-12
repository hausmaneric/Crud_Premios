import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  usuarioForm: Usuario ={
    id: 0,
    nome: '',
    login: '',
    senha: '',
    nivel: 0,
  }
  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdusuario(id);
    })
  }

  getByIdusuario(id:number){
    this.usuarioService.getByIdUsuario(id).subscribe((data) => {
      this.usuarioForm = Object.values(data)[0];
    })
  }

  updateUsuario(){
    this.usuarioService.updateUsuario(this.usuarioForm).subscribe({
      next:(data) => {
        this.router.navigate(["usuario"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  gotoList() {
    this.router.navigate(['/usuario']);
  }
}
