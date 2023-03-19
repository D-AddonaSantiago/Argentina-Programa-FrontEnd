import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { linksNav } from '../models/linksNav.model';

@Injectable({
  providedIn: 'root'
})

  export class LinksNavService {
    URL = 'http://localhost:8080/linksNav/';

    constructor(private http: HttpClient) {}

    public getLinksNav(): Observable<linksNav[]>{
      return this.http.get<linksNav[]>(`${this.URL}traer`);
    }

    public postLinksNav(linkNav: linksNav): Observable<string>{
      return this.http.post<string>(`${this.URL}crear`, linkNav);
    }

    public deleteLinksNav(id: any): Observable<string> {
      return this.http.delete<string>(`${this.URL}borrar/${id}`);
    }

    public editLinksNav(link: linksNav): Observable<linksNav> {
      const url = `${this.URL}editar/${link.id}?title=${link.title}&url=${link.url}`;
      return this.http.put<linksNav>(url, null);
    }
}
