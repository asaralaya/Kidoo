import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  searchUrl = 'https://sunbirdsaas.com/api/content/v1/search'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  body = {
    "request": {
      "filters": {
        "status": ["Draft"]
      }
    }
  }

  constructor(private http: HttpClient) { }

  searchContent(): Observable<any> {
    return this.http.post(this.searchUrl, this.body, this.httpOptions);

  }
}
