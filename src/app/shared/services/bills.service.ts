import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ResponseData } from '../interfaces/response-data';
import { Bills } from '../interfaces/bills';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private socket: Socket) { }

  async emitAllBillsData() {
    return this.socket.emit('get_all_bills_data');
  }

  async onAllBillsData() {
    return await this.socket.fromEvent<ResponseData>('all_bills_data');
  }

  async emitBillsData(room_id: number, user_id: number) {
    return this.socket.emit('get_bills_data', (room_id), (user_id));
  }

  async onBillsData() {
    return this.socket.fromEvent<ResponseData>('bills_data');
  }

  async emitTestData(month_year: any, index: number): Promise<ResponseData> {
    await this.socket.emit('test1', (month_year), (index));
    return await this.socket.fromOneTimeEvent<ResponseData>('test2').then((response) => {
      return response;
    });
  }

  async updateBillsData(data: Bills) {

    this.socket.emit('req_update_bills_data', (data));

    const result = await this.socket.fromOneTimeEvent<ResponseData>('res_update_bills_data')
    console.log(result.msg)
  }

  async uploadFile(base64: string, fileName: string) {

    await this.socket.emit('req_uplode_imgae_data', (base64), (fileName));

    return await this.socket.fromOneTimeEvent<ResponseData>('res_uplode_imgae_data')
  }

  // async insertBillsData(data:Bills){
    
  //   this.socket.emit('',(data));
  
  //   const result = await this.socket.fromOneTimeEvent<ResponseData>('')
  //   console.log(result.msg)
  // }


  async insertBillsData(billsData: Bills[],user_id:number): Promise<ResponseData> {
    await this.socket.emit('insert_data_bills', (billsData),(user_id));
    return await this.socket.fromOneTimeEvent<ResponseData>('res_data_bills').then((response) => {
      return response;
    });
  }
}
