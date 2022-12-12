import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuarioForm: Usuario ={
    id: 0,
    nome: '',
    login:'',
    senha:'',
    nivel:0,
  }

  constructor(private usuarioService: UsuarioService, private route: Router,) {  }

  ngOnInit(): void {
  }

  createUsuario(){
    this.usuarioService.createUsuario(this.usuarioForm).subscribe({
      next:(data) => {
        this.route.navigate(['/usuario'])
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList() {
    this.route.navigate(['/usuario']);
  }
}
