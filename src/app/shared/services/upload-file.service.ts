import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  baseURL = environment.apiUploadEndpoint

  constructor(private httpSrv: HttpService) { }

  async uploadFile(fileName: string, base64: string) {
    return this.httpSrv.post('/upload_base64', {file: fileName, file_url: base64})
  }

  async getFile(fileName: string) {
    return `${this.baseURL}/uploaded/${fileName}`
  }

  async deleteFile(fileName: string) {
    return this.httpSrv.post('/delete_file', {file: fileName})
  }
}
