import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Segmento } from 'src/app/models/segmento';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-segmento-update',
  templateUrl: './segmento-update.component.html',
  styleUrls: ['./segmento-update.component.css']
})
export class SegmentoUpdateComponent implements OnInit {

  segmentoForm: Segmento ={
    id: 0,
    nome: '',
  }
  constructor(private segmentoService: SegmentoService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getByIdSegmento(id);
    })
  }

  getByIdSegmento(id:number){
    this.segmentoService.getByIdSegmento(id).subscribe((data) => {
      this.segmentoForm = Object.values(data)[0];
    })
  }

  updateSegmento(){
    this.segmentoService.updateSegmento(this.segmentoForm).subscribe({
      next:(data) => {
        this.router.navigate(["segmento"]);
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  gotoList() {
    this.router.navigate(['/segmento']);
  }

}
