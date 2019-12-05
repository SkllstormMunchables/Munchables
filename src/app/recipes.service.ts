import { Injectable } from "@angular/core";
import { Recipe } from "./models/recipe";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}
  url = "";

  add(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  list(): Observable<any> {
    return this.http.get(this.url);
  }
}
