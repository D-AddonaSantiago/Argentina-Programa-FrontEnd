import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{

  proyList: proyecto[] = [];

  constructor(public proyectoService: ProyectoService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => this.proyList = data);
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editingElem: any = -1;
  tempProy: proyecto = new proyecto("","","","","");

  actuaizarLista():void{
    setTimeout(() => {
      this.proyectoService.getProyecto().subscribe(data => {this.proyList = data});
    }, 200);
  }

  editProject(proyect: proyecto) {
    this.proyectoService.editProyecto(proyect).subscribe();
    this.actuaizarLista();
  }

  agregarProyecto(): void {
    const nuevoProy: proyecto = {
      titulo: 'Nuevo Proyecto',
      descripcion: "Descripcion",
      img: "https://firebasestorage.googleapis.com/v0/b/sdfrontend.appspot.com/o/ProyectStandard.png?alt=media&token=55c41267-bfab-434c-8570-dac5906307bf",
      img2: "",
      img3: ""
    };
    this.proyectoService.postProyecto(nuevoProy).subscribe();
    this.actuaizarLista();
  }

  eliminarProyecto(proy: proyecto) {
    const id = proy.id;
    this.proyectoService.deleteProyecto(id).subscribe();
    this.actuaizarLista();
  }

  deleteImage(proy: proyecto) {
    proy.img = 'a';
  }

  deleteImage2(proy: proyecto) {
    proy.img2 = 'a';
  }

  deleteImage3(proy: proyecto) {
    proy.img3 = 'a';
  }

  addImage1(proy: proyecto){
    proy.img = "https://firebasestorage.googleapis.com/v0/b/sdfrontend.appspot.com/o/ProyectStandard.png?alt=media&token=55c41267-bfab-434c-8570-dac5906307bf";
  }

  addImage2(proy: proyecto){
    proy.img2 = "https://firebasestorage.googleapis.com/v0/b/sdfrontend.appspot.com/o/ProyectStandard.png?alt=media&token=55c41267-bfab-434c-8570-dac5906307bf";
  }

  addImage3(proy: proyecto){
    proy.img3 = "https://firebasestorage.googleapis.com/v0/b/sdfrontend.appspot.com/o/ProyectStandard.png?alt=media&token=55c41267-bfab-434c-8570-dac5906307bf";
  }

}
