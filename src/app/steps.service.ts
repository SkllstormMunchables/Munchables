import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Steps } from './models/steps';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  private stepsUrl = 'api/steps'; // URL to web api

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSteps(): Observable<any> {
    return this.http.get<any>(this.stepsUrl);
  }

  addSteps(step: Steps): Observable<any> {
    return this.http.post<any>(this.stepsUrl, step, this.httpHeaders);
  }

  deleteSteps(step: Steps | number): Observable<any> {
    const id = typeof step === 'number' ? step : step.recipeId;
    const url = `${this.stepsUrl}/${id}`;
    return this.http.delete<any>(url, this.httpHeaders);
  }

  updateSteps(step: Steps): Observable<any> {
    return this.http.put(this.stepsUrl, step, this.httpHeaders);
  }
}
