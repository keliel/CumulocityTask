import { Severity } from './severity.enum';
import { Device } from './device';

export interface Alarm {
  id: number;
  creationTime: Date;
  time: Date;
  type: string;
  text: string;
  status: string;
  severity: Severity;
  source: Device;
}
