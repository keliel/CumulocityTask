import { Component, OnInit } from "@angular/core";
import { AlarmResult } from "src/app/models/alarm-result";
import { AlarmService } from "src/app/services/alarm.service";
import { DeviceResult } from 'src/app/models/device-result';
import { Device } from 'src/app/models/device';
import { DeviceListEntry } from './device-list-entry';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"]
})
export class DeviceListComponent {
  alarmList: AlarmResult[];
  deviceList: DeviceListEntry[] = [];

  constructor(private alarmService: AlarmService) { }

  // Subscribe to alarm list response
  alarmSubscription = this.alarmService.getAllAlarms().subscribe((data: AlarmResult[]) => {
    this.alarmList = data;

    // Get all unique devices (TODO: Better from other API call)
    let deviceResults = this.alarmList.map((alarm) => {
      return alarm.source;
    });
    deviceResults = deviceResults.filter((device, index, array) =>
      array.indexOf(array.find((item) =>
        item.id === device.id)) === index
    );

    // Group alarms under source devices
    deviceResults.forEach(deviceResult => {
      let device = new DeviceListEntry(deviceResult);
      device.addAlarms(this.alarmList.filter((alarm) => alarm.source.id === deviceResult.id));
      device.sortAlarms();
      this.deviceList.push(device);
    });
  });

  ngOnDestroy(): void {
    this.alarmSubscription.unsubscribe();
  }
}
