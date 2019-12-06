import { Injectable } from "@angular/core";
import { Recipe } from "./models/recipe";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipesUrl = "api/heroes"; // URL to web api

  httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<any> {
    return this.http.get<any>(this.recipesUrl);
  }

  addIngredient(recipes: Recipe): Observable<any> {
    return this.http.post<any>(this.recipesUrl, recipes, this.httpHeaders);
  }

  deleteIngredient(recipes: Recipe | number): Observable<any> {
    const id = typeof recipes === "number" ? recipes : recipes.recipeId;
    const url = `${this.recipesUrl}/${id}`;
    return this.http.delete<any>(url, this.httpHeaders);
  }

  updateIngredient(recipes: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipes, this.httpHeaders);
  }
}
