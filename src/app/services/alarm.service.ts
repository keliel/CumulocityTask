import { Injectable } from "@angular/core";
import { Alarm } from "../models/alarm";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { error } from '@angular/compiler/src/util';

const HOST = "training.cumulocity.com";
const AUTH_KEY = "Basic dGVzdDpUZXN0MDEyMzQ=";
const ALARMS_BASE_URL = "/alarm/alarms?pageSize=2000&resolved=false";

@Injectable({
  providedIn: "root"
})
export class AlarmService {
  constructor(private http: HttpClient) {}

  getAllAlarms(): Observable<Alarm[]> {
    let headerParams = new HttpHeaders({
      "location": HOST,
      Authorization: AUTH_KEY
    });
    let response = this.http.get("https://" + HOST + ALARMS_BASE_URL, {
      headers: headerParams
    });
    return response.pipe(
      map(data => {
        return data["alarms"] as Alarm[];
        },
            error => {
                console.log("test"+error);
            })
    );
  }
}
