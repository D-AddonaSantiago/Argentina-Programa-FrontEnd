import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/models/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{

  personaLocal: persona = new persona("","","","")

  constructor(public personaService: PersonaService,
    private tokenService: TokenService,
    private router: Router,
    public imageService: ImageService,
    private activatedRouter: ActivatedRoute){}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.personaLocal = data});
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  editing:boolean = false;
  tempContentMe: persona = new persona("","","","");

  actualizarLista(): void {
    setTimeout(() => {
      this.personaService.getPersona().subscribe(data => {this.personaLocal = data});
    }, 200);
  }

  guardarPersona(){
    this.personaLocal.about_me = this.tempContentMe.about_me;
    this.personaService.editPersona(this.personaLocal).subscribe();
  }
}
