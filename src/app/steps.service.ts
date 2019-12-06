import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Steps } from "./models/steps";

@Injectable({
  providedIn: "root"
})
export class StepsService {
  private stepsUrl = "api/heroes"; // URL to web api

  httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<any> {
    return this.http.get<any>(this.stepsUrl);
  }

  addIngredient(step: Steps): Observable<any> {
    return this.http.post<any>(this.stepsUrl, step, this.httpHeaders);
  }

  deleteIngredient(step: Steps | number): Observable<any> {
    const id = typeof step === "number" ? step : step.recipeId;
    const url = `${this.stepsUrl}/${id}`;
    return this.http.delete<any>(url, this.httpHeaders);
  }

  updateIngredient(step: Steps): Observable<any> {
    return this.http.put(this.stepsUrl, step, this.httpHeaders);
  }
}
