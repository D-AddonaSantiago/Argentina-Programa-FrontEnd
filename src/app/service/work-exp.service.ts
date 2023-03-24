import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { work_exp } from '../models/work_exp.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkExpService {
  //URL = 'http://localhost:8080/work_exp/';
  URL: string = environment.apiURL + "work_exp/"

  constructor(private http: HttpClient) { }

  public getWorkExp(): Observable<work_exp[]> {
    return this.http.get<work_exp[]>(this.URL+'traer');
  }

  public postWorkExp(workExp: work_exp): Observable<string>{
    return this.http.post<string>(`${this.URL}crear`, workExp);
  }

  public deleteWorkExp(id: any): Observable<string> {
    return this.http.delete<string>(`${this.URL}borrar/${id}`);
  }

  public editWorkExp(workExp: work_exp): Observable<work_exp> {
    const url = `${this.URL}editar/${workExp.id}?titulo=${workExp.titulo}&descripcion=${workExp.descripcion}&img=${workExp.img}`;
    return this.http.put<work_exp>(url,null);
  }
}
