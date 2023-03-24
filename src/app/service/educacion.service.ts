import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //URL = 'http://localhost:8080/educacion/'
  URL: string = environment.apiURL + "educacion/"

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<educacion[]> {
    return this.http.get<educacion[]>(this.URL+'traer');
  }

  public postEducacion(educacion: educacion): Observable<string> {
    return this.http.post<string>(`${this.URL}crear`, educacion);
  }

  public deleteEducacion(id: any): Observable<string> {
    console.log(`${this.URL}borrar/${id}`);
    return this.http.delete<string>(`${this.URL}borrar/${id}`);
  }

  public editEducacion(educacion: educacion): Observable<educacion> {
    const url = `${this.URL}editar/${educacion.id}?titulo=${educacion.titulo}&descripcion=${educacion.descripcion}&img=`+educacion.img;
    console.log(url);

    return this.http.put<educacion>(url,null);
  }
}
