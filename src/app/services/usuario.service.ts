import { Router } from '@angular/router';
import { LoginComponent } from './../components/login/login.component';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient, private router: Router) { }

  public Autenticado: boolean = false;

  usuario!: Usuario;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarMenuEmitterFalse = new EventEmitter<boolean>();
  mostrarNome = new EventEmitter<string>();
  mostrarImg = new EventEmitter<string>();
  nome!: string;

  getUsuario(){
    return this.http.get<Usuario[]>("http://18.231.197.66:8080/api/clientes");
  }

  createUsuario(payLoad:Usuario){
    return this.http.post<Usuario>("http://18.231.197.66:8080/api/clientes", payLoad);
  }

  getByIdUsuario(id:number){
    return this.http.get<Usuario>(`http://18.231.197.66:8080/api/clientes/${id}`);
  }

  updateUsuario(payLoad:Usuario){
    return this.http.put(`http://18.231.197.66:8080/api/clientes/${payLoad.id}`,payLoad);
  }

  deleteUsuario(id:number){
    return this.http.delete<Usuario>(`http://18.231.197.66:8080/api/clientes/${id}`);
  }

  logar(login: string, senha: string){
    this.getUsuario().subscribe(res=>{
      const user = res.find((a: any) =>{
          return a.login === login && a.senha === senha
      });
      if(user?.login =='' || user?.senha == ''){
        alert("Informe o usuario e a senha")
      }
      else if(user){
        this.Autenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.mostrarMenuEmitterFalse.emit(false);
        this.nome = user.nome;
        this.mostrarNome.emit(this.nome);
        // this.mostrarImg.emit(user.image)
        // alert(this.nome)

        this.router.navigate(['home']);
      }else{
        alert("usuário não encontrado")
        this.mostrarMenuEmitter.emit(false);
      }
    },error=>{
      alert("Somethin went wrong");
    })
  }

  usuarioAutenticado(){
    return this.Autenticado;
  }
}
