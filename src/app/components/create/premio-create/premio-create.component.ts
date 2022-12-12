import { ImgService } from './../../../services/img.service';
import { Imagens } from './../../../models/imagens';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Nivel } from 'src/app/models/nivel';
import { Premio } from 'src/app/models/premio';
import { NivelService } from 'src/app/services/nivel.service';
import { PremioService } from 'src/app/services/premio.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-premio-create',
  templateUrl: './premio-create.component.html',
  styleUrls: ['./premio-create.component.css']
})
export class PremioCreateComponent implements OnInit {
  nivel: Nivel[] = [];
  img: Imagens[] | any = [];
  premioForm: Premio ={
    id: 0,
    titulo: '',
    descricao: '',
    publicado: '',
    validade: '',
    pontos: 0,
    nivel: 0,
    nivelnome:'',
    quantidade: 0,
    valido: true,
    vencido: false,
    utilizado: 0,
    image: '',
    nivelnome_1:''
  }

  imgForm: Imagens = {
    id: 0,
    imagem: '',
    premio: 0,
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isLinear = true;
  myImage!: Observable<any>;
  base64code!: any;

  constructor(public dialog: MatDialog,private premioService: PremioService,private nivelService: NivelService,private imgService: ImgService,private _formBuilder: FormBuilder, private route: Router,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('en-GB');
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {
    this.getNivel();
  }

  onChange($event: Event){
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    this.convertToBase64(file)
  }

  onChangeImg($event: Event){
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    this.convertToBase64Img(file)
  }

  convertToBase64(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file,subscriber)
    })
    observable.subscribe((d) => {
     this.myImage = d;
     this.base64code = d;

     setTimeout(() => {
        this.premioForm.image = d;
     }, 500);
    })
  }

  convertToBase64Img(file: File){
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file,subscriber)
    })
    observable.subscribe((d) => {
     this.myImage = d;
     this.base64code = d;

    setTimeout(() => {
      this.imgForm.imagem = d
    }, 500);

    })
  }

  readFile(file: File,subscriber: Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file)
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete()
    }
    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete();
    }
  }

  getNivel(){
    setTimeout(() => {
      this.nivelService.getNivel().subscribe((data) =>{
        this.nivel = data;
      })
    }, 1000);

  }

  selectNivel(){
    let nomeNivel!:string
    if(this.premioForm.nivel == 0){
      this.premioForm.nivelnome = "";
    }else{
      setTimeout(() => {
        this.nivelService.getByIdNivel(this.premioForm.nivel).subscribe((data)=>{
          nomeNivel = Object.values(data)[0].nome
        })
      }, 1000);

      setTimeout(() => {
        this.premioForm.nivelnome = nomeNivel
      }, 1000);
    }
  }

  createPremio(){
    // this.selectNivel();

      this.premioService.createPremio(this.premioForm).subscribe({
        next:(data) => {
          this.isLinear = false;
          this.premioService.getPremio().subscribe((data) => {
            this.imgForm.premio = data[data.length - 1].id
          })
        },error: (error) =>{
          console.log(error);
        }
      })

  }

  getImage(id:number){
    this.imgService.searchImageProduct(id).subscribe((data) =>{
      this.img = data;
    })
  }

  createImage(){
    if(this.imgForm.imagem == ''){
      this.openDialog()
    }else{
      setTimeout(() => {
        this.imgService.createImage(this.imgForm).subscribe({
          next:(data) => {
            setTimeout(() => {
              this.getImage(this.imgForm.premio)
              this.imgForm.imagem = ''
            }, 500);
          },error: (error) =>{
            console.log(error);
          }
        })
      }, 500);
    }


  }

  onDeleteImage(id:number, prod_id:number){
    if(confirm('Deseja confirmar a Exclusão?')){
      this.imgService.deleteImage(id).subscribe(res=>{
        this.getImage(this.imgForm.premio)
      })
    }
  }

  gotoList() {
    this.route.navigate(['/premio']);
  }


}

@Component({
  selector: 'premio-update.component',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(public dialog: MatDialog){

  }
  fecharDialog(){
    this.dialog.closeAll();
  }
}
