import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  eduList: educacion [] = [];

  constructor(public educacionService: EducacionService){}

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.eduList = data});
  }

  editingElem:any = -1;
  tempEdu: educacion = new educacion("","","");


  actualizarLista(): void {
    setTimeout(() => {
      this.educacionService.getEducacion().subscribe(data => {this.eduList = data});
    }, 200);
  }

  editarEduMe(edu: educacion) {
    this.educacionService.editEducacion(edu).subscribe();
    this.actualizarLista();
  }

  agregarLink() {
    const nuevoEdu: educacion = {
      titulo: "Nueva educacion",
      descripcion: "Descripcion",
      img: "../../../assets/Img/educationStandard.jpg"
    }
    this.educacionService.postEducacion(nuevoEdu).subscribe();
    this.actualizarLista();
  }

  eliminarEduMe(edu: educacion) {
    const id = edu.id;
    this.educacionService.deleteEducacion(id).subscribe();
    this.actualizarLista();
  }
}
