import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit{

  proyList: proyecto[] = [];

  constructor(public proyectoService: ProyectoService){}

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(data => this.proyList = data);
  }

  editingElem: any = -1;
  tempProy: proyecto = new proyecto("","","","","");

  /*
  selectedProjectIndex = -1;
  selectedProject: Project = { title: '', description: '', images: [''] };
  editProjectIndex = -1;
  editing = false;
  tempProject: Project = {title:'', description:'', images:['']}*/

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
      img: "../../../assets/Img/Proyect1.jpg",
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
  deleteImage(proy: proyecto, img: string) {
   // this.tempProject.images.splice(index, 1)
  }

  addImage(){

  }

}
