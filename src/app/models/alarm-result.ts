import { Severity } from "./severity.enum";
import { DeviceResult } from "./device-result";
import { Alarm } from './alarm';

export interface AlarmResult extends Alarm {
  source: DeviceResult;
  count: number;
  history: any;
}
