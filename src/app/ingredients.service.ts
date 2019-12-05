import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Ingredients } from "./models/ingredients";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class IngredientsService {
  ingredient: Ingredients[] = [];

  constructor(private http: HttpClient) {}
  url = " ";

  add(ingredients: Ingredients): void {
    this.ingredient.push(ingredients);
  }

  list(): Observable<any> {
    return this.http.get(this.url);
  }
}
