import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  mostrarMenu: boolean = false;
  ok: boolean = false;

  constructor(private route: Router, private loginService: UsuarioService) { }

  ngOnInit(): void {
    if (this.mostrarMenu == true) {
      this.ok = false
    }else{
      this.loginService.mostrarMenuEmitter.subscribe( (mostrar) => {
        this.mostrarMenu = mostrar
        this.ok = true
      })
    }

  }
}
