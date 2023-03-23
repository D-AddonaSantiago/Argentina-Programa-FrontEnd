import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{

  eduList: educacion [] = [];

  constructor(public educacionService: EducacionService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.eduList = data});

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editingElem:any = -1;
  tempEdu: educacion = new educacion("","","");


  actualizarLista(): void {
    setTimeout(() => {
      this.educacionService.getEducacion().subscribe(data => {this.eduList = data});
    }, 200);
  }

  editarEduMe() {
    console.log("LINK IMAGEN: "+this.tempEdu.img);
    this.educacionService.editEducacion(this.tempEdu).subscribe();
    this.actualizarLista();
  }

  agregarLink() {
    const nuevoEdu: educacion = {
      titulo: "Nueva educacion",
      descripcion: "Descripcion",
      img: "https://firebasestorage.googleapis.com/v0/b/sdfrontend.appspot.com/o/educationStandard.jpg?alt=media&token=44baecfc-acc8-45d4-a2b4-7163256a756c"
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
