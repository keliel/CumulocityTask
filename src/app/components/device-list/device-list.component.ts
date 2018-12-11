import { Component, OnInit } from "@angular/core";
import { Alarm } from "src/app/models/alarm";
import { AlarmService } from "src/app/services/alarm.service";

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"]
})
export class DeviceListComponent implements OnInit {
  alarmList: Alarm[];

  constructor(private alarmService: AlarmService) {}

  ngOnInit() {
    this.alarmService.getAllAlarms().subscribe((data: Alarm[]) => {
      this.alarmList = data;
      console.log(data);
    });
  }
}
