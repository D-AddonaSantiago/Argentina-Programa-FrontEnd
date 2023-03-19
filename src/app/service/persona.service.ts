import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/'

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+'traer/perfil');
  }

  public editPersona(persona: persona): Observable<persona> {
    const url = `${this.URL}editar/${persona.id}?nombre=${persona.nombre}&apellido=${persona.apellido}&about_me=${persona.about_me}&img=${persona.img}`;
    return this.http.put<persona>(url, null);
  }
}
