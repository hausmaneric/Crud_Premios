import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Segmento } from 'src/app/models/segmento';
import { SegmentoService } from 'src/app/services/segmento.service';

declare var window: any;

@Component({
  selector: 'app-segmento-list',
  templateUrl: './segmento-list.component.html',
  styleUrls: ['./segmento-list.component.css']
})
export class SegmentoListComponent implements OnInit {
  allSegmento: Segmento[] = [];

  constructor(private segmentoService: SegmentoService, private router: Router) { }

  deleteModal: any;
  idToDelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    );
    this.getSegmento();
  }

  getSegmento(){
    this.segmentoService.getSegmento().subscribe((data) =>{
      this.allSegmento = data;
    })
  }

  onDelete(id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.segmentoService.deleteSegmento(id).subscribe(res=>{
        this.getSegmento();
      })
    }
  }

  openDeleteModal(id:number){
    this.idToDelete = id;
    this.deleteModal.show();
  }

  deleteSegmento(){
    this.segmentoService.deleteSegmento(this.idToDelete).subscribe((data) => {
      this.allSegmento = this.allSegmento.filter(_=>_.id !== this.idToDelete);
      this.deleteModal.hide();
    })
  }

}
