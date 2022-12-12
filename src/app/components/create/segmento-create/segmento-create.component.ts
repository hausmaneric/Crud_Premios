import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Segmento } from 'src/app/models/segmento';
import { SegmentoService } from 'src/app/services/segmento.service';

@Component({
  selector: 'app-segmento-create',
  templateUrl: './segmento-create.component.html',
  styleUrls: ['./segmento-create.component.css']
})
export class SegmentoCreateComponent implements OnInit {
  segmentoForm: Segmento ={
    id: 0,
    nome: '',
  }
  constructor(private segmentoService: SegmentoService, private router: Router, private route: ActivatedRoute,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }

  createSegmento(){
    this.segmentoService.createSegmento(this.segmentoForm).subscribe({
      next:(data) => {
        this.router.navigate(["segmento"])
      },error: (error) =>{
        console.log(error);
      }
    })
  }

  gotoList() {
    this.router.navigate(['/segmento']);
  }

}
