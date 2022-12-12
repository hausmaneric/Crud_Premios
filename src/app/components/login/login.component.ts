import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuarioForm: Usuario ={
    id: 0,
    nome: '',
    login: '',
    senha: '',
    nivel: 0,
  }

  mostrarMenu: boolean = false;

  public loginForm: Usuario[] = []
  constructor( private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  login(){
    this.usuarioService.logar(this.usuarioForm.login, this.usuarioForm.senha);

    // this.usuarioService.getUsuario().subscribe(res=>{
    //   const user = res.find((a: any) =>{
    //     return a.login === this.usuarioForm.login && a.senha === this.usuarioForm.senha
    //   });
    //   if(user){
    //     this.Autenticado = true;
    //     this.usuarioService.mostrarMenuEmitter.emit(true);
    //     this.router.navigate(['home']);
    //   }else{
    //     alert("usuário não encontrado")
    //     this.usuarioService.mostrarMenuEmitter.emit(false);
    //   }
    // },error=>{
    //   alert("Somethin went wrong");
    // })
  };

}
