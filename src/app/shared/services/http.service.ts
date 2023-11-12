import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ResponseData } from '../interfaces/response-data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseURL = environment.apiUploadEndpoint
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  async get(endpoint: string) {
    const url = this.baseURL + endpoint
    return this.http.get(url)
  }

  async post(endpoint: string, body: any) {
    const url = this.baseURL + endpoint
    return this.http.post<ResponseData>(url, body, this.httpOptions)
  }
  
}
