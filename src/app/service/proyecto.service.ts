import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyecto/';

  constructor(private http: HttpClient) {  }

  public getProyecto(): Observable<proyecto[]> {
    return this.http.get<proyecto[]>(this.URL+'traer');
  }

  public postProyecto(proyecto: proyecto): Observable<string> {
    return this.http.post<string>(`${this.URL}crear`, proyecto);
  }

  public deleteProyecto(id: any): Observable<string> {
    return this.http.delete<string>(`${this.URL}borrar/${id}`);
  }

  public editProyecto(proyecto:proyecto): Observable<proyecto> {
    const url = `${this.URL}editar/${proyecto.id}?titulo=${proyecto.titulo}&descripcion=${proyecto.descripcion}&img=${proyecto.img}&img2=${proyecto.img2}&img3=${proyecto.img3}`;
    return this.http.put<proyecto>(url, null);
  }
}
