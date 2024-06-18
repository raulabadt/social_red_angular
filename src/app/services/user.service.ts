import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/users'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
