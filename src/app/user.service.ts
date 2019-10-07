import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:8082';

  getAll(): Promise<any>{
    var reqHeader = new HttpHeaders({       
      'Content-Type': 'application/json'
        });
  return this.http.get(`${this.baseUrl}/data/api/getAll`, { headers: reqHeader })
  .toPromise()
  .then( resposta => resposta);
  }

  getUserByCpf(id: number):Promise<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(`${this.baseUrl}/data/api/bycpf/${id}`,{headers:reqHeader})
    .toPromise()
    .then(resposta=>resposta);
  }

  createUser(user: Object): Promise<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/data/api/create/save`,user,{headers:reqHeader })
    .toPromise()
    .then(resposta=>resposta);
  }

  updateUser(user:Object): Promise<any>{
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/data/api/update/save`,user,{headers:reqHeader})
    .toPromise()
    .then(resposta=>resposta);
  }


  deleteUser(id: number): Promise<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.delete(`${this.baseUrl}/data/api/delete/${id}`, {headers:reqHeader})
    .toPromise()
    .then();
  }

 /*  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data/api/getAll`);
  } */
  
}
