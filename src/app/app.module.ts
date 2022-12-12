import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { ProfissionalCreateComponent } from './components/create/profissional-create/profissional-create.component';
import { ProfissionalUpdateComponent } from './components/update/profissional-update/profissional-update.component';
import { ProfissionalListComponent } from './components/list/profissional-list/profissional-list.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { NivelCreateComponent } from './components/create/nivel-create/nivel-create.component';
import { NivelUpdateComponent } from './components/update/nivel-update/nivel-update.component';
import { PcUpdateComponent } from './components/update/pc-update/pc-update.component';
import { PcCreateComponent } from './components/create/pc-create/pc-create.component';
import { PontoCreateComponent } from './components/create/ponto-create/ponto-create.component';
import { PontoUpdateComponent } from './components/update/ponto-update/ponto-update.component';
import { PontoListComponent } from './components/list/ponto-list/ponto-list.component';
import { PcListComponent } from './components/list/pc-list/pc-list.component';
import { SegmentoListComponent } from './components/list/segmento-list/segmento-list.component';
import { SegmentoUpdateComponent } from './components/update/segmento-update/segmento-update.component';
import { SegmentoCreateComponent } from './components/create/segmento-create/segmento-create.component';
import { UsuarioCreateComponent } from './components/create/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/update/usuario-update/usuario-update.component';
import { UsuarioListComponent } from './components/list/usuario-list/usuario-list.component';
import { PremioListComponent } from './components/list/premio-list/premio-list.component';
import { PremioUpdateComponent } from './components/update/premio-update/premio-update.component';
import { PremioCreateComponent } from './components/create/premio-create/premio-create.component';
import { AuthGuard } from './guards/auth-guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { NivelListsComponent } from './components/list/nivel-lists/nivel-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ProfissionalCreateComponent,
    ProfissionalUpdateComponent,
    ProfissionalListComponent,
    NivelCreateComponent,
    NivelUpdateComponent,
    PcUpdateComponent,
    PcCreateComponent,
    PontoCreateComponent,
    PontoUpdateComponent,
    PontoListComponent,
    PcListComponent,
    SegmentoListComponent,
    SegmentoUpdateComponent,
    SegmentoCreateComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    UsuarioListComponent,
    PremioListComponent,
    PremioUpdateComponent,
    PremioCreateComponent,
    NivelListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    FormsModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatExpansionModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
