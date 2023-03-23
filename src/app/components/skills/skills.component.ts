import { Component } from '@angular/core';
import { skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: skill[] = [];

  constructor(public skillService: SkillService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => {this.skills = data});

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editingSkill: any = -1;
  tempSkill: skill = new skill("",0);

  actuaizarLista():void{
    setTimeout(() => {
      this.skillService.getSkill().subscribe(data => {this.skills = data});
    }, 200);
  }

  agregarSkill(): void {
    const nuevaSkill: skill = {
      nombre: 'Nueva Skill',
      valor: 0
    };
    this.skillService.postSkill(nuevaSkill).subscribe();
    this.actuaizarLista();
  }

  guardarSkill(x: skill) {
    const skill = x;
    this.skillService.editSkill(skill).subscribe();
    this.actuaizarLista();
  }

  eliminarSkill(skill: skill): void {
    const id= skill.id;
    this.skillService.deleteSkill(id).subscribe();
    this.actuaizarLista();
  }
}
