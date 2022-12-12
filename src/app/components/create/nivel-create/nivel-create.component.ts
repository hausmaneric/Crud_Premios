import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Nivel } from 'src/app/models/nivel';
import { NivelService } from 'src/app/services/nivel.service';

@Component({
  selector: 'app-nivel-create',
  templateUrl: './nivel-create.component.html',
  styleUrls: ['./nivel-create.component.css']
})
export class NivelCreateComponent implements OnInit {

  nivelForm: Nivel ={
    id: 0,
    nome: '',
  }

  constructor(private nivelService: NivelService, private route: Router,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }

  createNivel (){
    this.nivelService.createNivel(this.nivelForm).subscribe({
      next:(data) => {
        this.route.navigate(["nivel"])
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList() {
    this.route.navigate(['/nivel']);
  }

}
