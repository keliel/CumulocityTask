import { Component, OnInit } from "@angular/core";
import { AlarmResult } from "src/app/models/alarm-result";
import { AlarmService } from "src/app/services/alarm.service";
import { DeviceResult } from 'src/app/models/device-result';

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"]
})
export class DeviceListComponent implements OnInit {
  alarmList: AlarmResult[];
  deviceList: DeviceResult[];

  constructor(private alarmService: AlarmService) { }

  ngOnInit() {
    this.alarmService.getAllAlarms().subscribe((data: AlarmResult[]) => {
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
