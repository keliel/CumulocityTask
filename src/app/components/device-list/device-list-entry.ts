import { Alarm } from 'src/app/models/alarm';
import { Device } from 'src/app/models/device';
import { DeviceResult } from 'src/app/models/device-result';

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
}
