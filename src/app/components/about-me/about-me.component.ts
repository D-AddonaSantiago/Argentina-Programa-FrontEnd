import { Component } from '@angular/core';
import { persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  persona: persona = new persona("","","","")

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

  content_me:string = "asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlifasdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif asdasfsdjnd ljfv jwhoviuwehi euvlif"
  profile_img:string = "../../../assets/Img/anonimous.png"
  editing:boolean = false;
  tempContentMe: string ='';


  guardarTexto(){
    this.persona.about_me = this.tempContentMe;
    this.personaService.editPersona(this.persona).subscribe();
  }
}
