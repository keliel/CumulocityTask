import { Severity } from "./severity.enum";
import { DeviceResult } from "./device-result";

export interface AlarmResult {
  id: number;
  creationTime: Date;
  time: Date;
  type: string;
  text: string;
  status: string;
  severity: Severity;
  source: DeviceResult;
  count: number;
  history: any;
}
