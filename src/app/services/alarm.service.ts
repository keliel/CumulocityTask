import { Injectable } from "@angular/core";
import { AlarmResult } from "../models/alarm-result";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const HOST = "training.cumulocity.com";
const AUTH_KEY = "Basic dGVzdDpUZXN0MDEyMzQ=";
const ALARMS_BASE_URL = "/alarm/alarms?pageSize=2000&resolved=false";

@Injectable({
  providedIn: "root"
})
export class AlarmService {
  constructor(private http: HttpClient) { }

  getAllAlarms(): Observable<AlarmResult[]> {
    let headerParams = new HttpHeaders({
      "location": HOST,
      Authorization: AUTH_KEY
    });
    let response = this.http.get("https://" + HOST + ALARMS_BASE_URL, {
      headers: headerParams
    });
    return response.pipe(
      map(data => {
        return data["alarms"] as AlarmResult[];
      })
    );
  }
}
