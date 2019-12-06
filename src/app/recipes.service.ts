import { Injectable } from "@angular/core";
import { Recipe } from "./models/recipe";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipesUrl = ""; // URL to web api

  httpHeaders = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get<any>(this.recipesUrl);
  }

  addRecipes(recipes: Recipe): Observable<any> {
    return this.http.post<any>(this.recipesUrl, recipes, this.httpHeaders);
  }

  deleteRecipes(recipes: Recipe | number): Observable<any> {
    const id = typeof recipes === "number" ? recipes : recipes.recipeId;
    const url = `${this.recipesUrl}/${id}`;
    return this.http.delete<any>(url, this.httpHeaders);
  }

  updateRecipes(recipes: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipes, this.httpHeaders);
  }
}
