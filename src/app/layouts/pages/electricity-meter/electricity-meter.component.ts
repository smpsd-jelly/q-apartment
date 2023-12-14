import { Component } from '@angular/core';
import { SwalService } from 'src/app/shared/services/swal.service';
import { Router } from '@angular/router';
import { BillsService } from 'src/app/shared/services/bills.service';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { Bills } from 'src/app/shared/interfaces/bills';
import { RoomService } from 'src/app/shared/services/room.service';
import { Room } from 'src/app/shared/interfaces/room';
import { User } from 'src/app/shared/interfaces/user';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-electricity-meter',
  templateUrl: './electricity-meter.component.html',
  styleUrls: ['./electricity-meter.component.css']
})
export class ElectricityMeterComponent {
  title = 'บันทึกเลขมิเตอร์'
  month_year: any;
  btnAddMeter: number = 1;
  billsData: Bills[] = [{} as Bills];
  roomData!: Room[]

  constructor(private router: Router, private swalSrv: SwalService, private billsrv: BillsService, private userSrv: UserService, private roomSrv: RoomService) {
  }

  async test() {
    await this.billsrv.emitTestData(new Date(this.month_year), 3).then((data) => { console.log(data) })
  }

  async ngOnInit() {
    await this.onData();
  }

  async ngAfterViewInit() {
    await this.emitData();
  }

  async emitData() {
    await this.roomSrv.emitAllRoomData();
  }

  async onData() {
    const result = await this.roomSrv.onAllRoomData();
    this.roomData = result.msg;
    console.log(result.msg)
  }


  selectBuilding(building:number){
    if(this.roomData){
      return this.roomData.filter(x => x.building == building) == null || undefined ? [] : this.roomData.filter(x => x.building == building)
    }
    let data:Room[] = [{} as Room]
    data = []
    return data;
  }

  async confirmBtn() {
    if(!this.month_year){
      for(const items of this.billsData){
        items.month_year = new Date(this.month_year);
      }
  
      const user:User = this.userSrv.getUserData()
  
      
      this.swalSrv.confirmAlert({text: "ต้องการเพิ่มข้อมูลเลขมิเตอร์ใช่หรือไม่?"}).then( async(result) => {
        
        if(result.isConfirmed){
          await this.billsrv.insertBillsData(this.billsData,user.user_id).then((response) => {
            if(response.status !== 200){
              this.swalSrv.errorAlert({ title: "Error", text: "กรุณากรอกข้อมูลให้ครบถ้วน" });
              return
            }
            this.swalSrv.successAlert({ title: "Success", text: "เพิ่มข้อมูลเลขมิเตอร์เสร็จสิ้น" });
            window.location.reload;
          })
        }
      })
    }
   
 
  }

  backToAllBills() {
    this.router.navigate(['/admin/all-meter']);
  }

  meterForm: FormGroup = new FormGroup({
    meterList: new FormArray([]),
  });

  getMeterFields(): FormGroup {
    return new FormGroup({
      meter_building: new FormControl(''),
      meter_room: new FormControl(''),
      electric_lastmonth: new FormControl(''),
      electric_current: new FormControl(''),
      water_lastmonth: new FormControl(''),
      water_current: new FormControl(''),
    });
  }

  meterListArray() {
    return this.meterForm.get('meterList') as FormArray;
  }

  addMeter() {
    // this.meterListArray().push(this.getMeterFields());
    this.billsData.push({} as Bills)
  }

  addMeter20() {
    for (let i = 0; i < this.btnAddMeter; i++) {
      // this.meterListArray().push(this.getMeterFields());
      this.billsData.push({} as Bills)
    }
  }

  removeMeter(i: number) {
    this.billsData.splice(i, 1);
  }
}
