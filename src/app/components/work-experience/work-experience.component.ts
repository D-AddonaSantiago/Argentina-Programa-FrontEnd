import { Component, OnInit } from '@angular/core';
import { work_exp } from 'src/app/models/work_exp.model';
import { WorkExpService } from 'src/app/service/work-exp.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{

  workExp: work_exp[] = [];

  constructor(public workExpService: WorkExpService){}

  ngOnInit(): void {
    this.workExpService.getWorkExp().subscribe(data => {this.workExp = data});
  }

  editingElem:any = -1;
  tempWork: work_exp = new work_exp("","","");


  actuaizarLista():void{
    setTimeout(() => {
      this.workExpService.getWorkExp().subscribe(data => {this.workExp = data});
    }, 200);
  }

  editarWork(work: work_exp) {
    this.workExpService.editWorkExp(work).subscribe();
    this.actuaizarLista();
  }

  agregarWork(): void {
    const nuevoLink: work_exp = {
      titulo: 'Nueva experiencia',
      descripcion: "Descripcion",
      img: "../../../assets/Img/LogoEmp1.jpg"
    };
    this.workExpService.postWorkExp(nuevoLink).subscribe();
    this.actuaizarLista();
  }

  eliminarWork(work: work_exp) {
    const id = work.id;
    this.workExpService.deleteWorkExp(id).subscribe();
    this.actuaizarLista();
  }

}
