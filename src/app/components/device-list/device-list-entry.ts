import { Alarm } from 'src/app/models/alarm';
import { Device } from 'src/app/models/device';
import { DeviceResult } from 'src/app/models/device-result';
import { Severity } from 'src/app/models/severity.enum';

export class DeviceListEntry {
  device: Device;
  alarms: Alarm[];

  constructor(device: DeviceResult);
  constructor(device: Device) {
    this.device = device;
    this.alarms = [];
  }

  addAlarms(alarms: Alarm[]): any {
    this.alarms.push(...alarms);
  }

  sortAlarms(): void {
    this.alarms.sort((a: Alarm, b: Alarm) => {
      if (Severity[a.severity] === Severity[b.severity]) {
        return a.creationTime < b.creationTime ? 1 : a.creationTime === b.creationTime ? 0 : -1;
      }
      return Severity[a.severity] < Severity[b.severity] ? 1 : -1;
    });
  }
}
