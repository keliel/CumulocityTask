import { Component, OnInit } from "@angular/core";
import { Alarm } from "src/app/models/alarm";
import { AlarmService } from "src/app/services/alarm.service";
import { Device } from 'src/app/models/device';

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"]
})
export class DeviceListComponent implements OnInit {
  alarmList: Alarm[];
  deviceList: Device[];

  constructor(private alarmService: AlarmService) { }

  ngOnInit() {
    this.alarmService.getAllAlarms().subscribe((data: Alarm[]) => {
      this.alarmList = data;
      let devices = this.alarmList.map((alarm) => {
        return alarm.source;
      });
      this.deviceList = devices.filter((device, index, array) =>
        array.indexOf(array.find((item) =>
          item.id === device.id)) === index
      );
    });
  }
}
