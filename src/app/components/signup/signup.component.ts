import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuarioForm: Usuario ={
    id: 0,
    nome: '',
    login: '',
    senha: '',
    nivel: 0,
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  createUsuario(){
    this.usuarioService.createUsuario(this.usuarioForm).subscribe({
      next:(data) => {
        this.router.navigate(["login"])
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }


}
