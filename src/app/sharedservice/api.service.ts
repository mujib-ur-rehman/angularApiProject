import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: any;

  constructor(private http: HttpClient) {}
  postuser(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data);
  }
  getuser() {
    return this.http.get<any>('http://localhost:3000/posts');
  }
  deleteuser(id: number) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id);
  }
  updateuser(id: number, data: any) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data);
  }
  set(data: any) {
    this.user = data;
  }
  get() {
    return this.user;
  }
}
