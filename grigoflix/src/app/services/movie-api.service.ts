import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2U1MGUyM2RlODU0MTEzNzJmY2IwYWI3Yzg2MjIxOCIsIm5iZiI6MTczMjA0MjA0OS4xNjk5OTk4LCJzdWIiOiI2NzNjZGQ0MTYwYjdiM2JjOTRhMGQzZTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZH146obDT_1TQf6DlKEXhkFjmt96unbu2M6B6J8h4iQ'
    }
  };
  
  // Banner de Midias da Semana
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?language=pt-br`, this.options);
  }
}
