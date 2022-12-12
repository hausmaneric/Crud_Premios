import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Nivel } from 'src/app/models/nivel';
import { NivelService } from 'src/app/services/nivel.service';

@Component({
  selector: 'app-nivel-update',
  templateUrl: './nivel-update.component.html',
  styleUrls: ['./nivel-update.component.css']
})
export class NivelUpdateComponent implements OnInit {

  nivel: Nivel[] | any = []
  nivelForm: Nivel[] | any ={
    id: 0,
    nome: '',
  }
  constructor(private nivelService: NivelService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdProfissional(id);
    })
  }

  getByIdProfissional(id:number){
    this.nivelService.getByIdNivel(id).subscribe((data) => {
     this.nivelForm = Object.values(data)[0];
    })
  }

  updateNivel(){
    this.nivelService.updateNivel(this.nivelForm).subscribe({
      next:(data) => {
        this.router.navigate(["nivel"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  gotoList() {
    this.router.navigate(['/nivel']);
  }

}
