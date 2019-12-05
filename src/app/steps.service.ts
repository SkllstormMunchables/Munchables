import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Steps } from "./models/steps";

@Injectable({
  providedIn: "root"
})
export class StepsService {
  step: Steps[] = [];

  constructor(private http: HttpClient) {}
  url = "";

  add(steps: Steps): void {
    this.step.push(steps);
  }

  list(): Observable<any> {
    return this.http.get(this.url);
  }
}
