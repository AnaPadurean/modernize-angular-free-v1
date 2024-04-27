import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularServiceService {
  private baseUrl = 'http://localhost:3000/programari';
  constructor(private http: HttpClient) { }
  saveProgramare(programareData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, programareData);
  }
}
