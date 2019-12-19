import { RecipesService } from './recipes.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientsService {
  private recipeIngredientsUrl = 'api/recipeIngredients'; // URL to web api

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private RecipesService) { }

  getRecipeIngredients(): Observable<any> {
    return this.http.get<any>(this.recipeIngredientsUrl);
  }

  deleteRecipeIngredient(recipeIngredients: RecipeIngredients | number): Observable<any> {
    console.log('slider.service: recipeIngredients: ' + recipeIngredients);
    const id =
      typeof recipeIngredients === 'number' ? recipeIngredients : recipeIngredients.ingredientId;
    const url = `${this.recipeIngredientsUrl}/${id}`;
    return this.http.delete<any>(url, this.httpHeaders);
  }
}
