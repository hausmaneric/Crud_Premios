import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelCreateComponent } from './components/create/nivel-create/nivel-create.component';
import { PcCreateComponent } from './components/create/pc-create/pc-create.component';
import { PontoCreateComponent } from './components/create/ponto-create/ponto-create.component';
import { PremioCreateComponent } from './components/create/premio-create/premio-create.component';
import { ProfissionalCreateComponent } from './components/create/profissional-create/profissional-create.component';
import { SegmentoCreateComponent } from './components/create/segmento-create/segmento-create.component';
import { UsuarioCreateComponent } from './components/create/usuario-create/usuario-create.component';
import { HomeComponent } from './components/home/home.component';
import { NivelListsComponent } from './components/list/nivel-lists/nivel-lists.component'
import { PcListComponent } from './components/list/pc-list/pc-list.component';
import { PontoListComponent } from './components/list/ponto-list/ponto-list.component';
import { PremioListComponent } from './components/list/premio-list/premio-list.component';
import { ProfissionalListComponent } from './components/list/profissional-list/profissional-list.component';
import { SegmentoListComponent } from './components/list/segmento-list/segmento-list.component';
import { UsuarioListComponent } from './components/list/usuario-list/usuario-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NivelUpdateComponent } from './components/update/nivel-update/nivel-update.component';
import { PcUpdateComponent } from './components/update/pc-update/pc-update.component';
import { PontoUpdateComponent } from './components/update/ponto-update/ponto-update.component';
import { PremioUpdateComponent } from './components/update/premio-update/premio-update.component';
import { ProfissionalUpdateComponent } from './components/update/profissional-update/profissional-update.component';
import { SegmentoUpdateComponent } from './components/update/segmento-update/segmento-update.component';
import { UsuarioUpdateComponent } from './components/update/usuario-update/usuario-update.component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'signup', component: SignupComponent
  // },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]
   },

  // Nivel
  { path:'nivel', component:NivelListsComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'nivelCreate', component: NivelCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'nivelUpdate/:id', component: NivelUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

  // Pc
  { path:'pc', component:PcListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'pcCreate', component: PcCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'pcUpdate/:id', component: PcUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

  // Ponto
  { path:'ponto', component:PontoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'pontoCreate', component: PontoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'pontoUpdate/:id', component: PontoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

  // Premio
  { path:'premio', component:PremioListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'premioCreate', component: PremioCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'premioUpdate/:id', component: PremioUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

  // Profissional
  { path:'profissional', component:ProfissionalListComponent, canActivate: [AuthGuard]},
  { path:'profissionalCreate', component: ProfissionalCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'profissionalUpdate/:id', component: ProfissionalUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

  // Segmento
  { path:'segmento', component:SegmentoListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'segmentoCreate', component: SegmentoCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'segmentoUpdate/:id', component: SegmentoUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},

  // Usuario
  { path:'usuario', component:UsuarioListComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'usuarioCreate', component: UsuarioCreateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'usuarioUpdate/:id', component: UsuarioUpdateComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
