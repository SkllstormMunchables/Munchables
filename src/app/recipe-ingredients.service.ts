import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientsService {
  private recipeIngredientsUrl = 'api/recipeIngredients'; // URL to web api

  constructor(private http: HttpClient) { }

  getRecipeIngredients(): Observable<any> {
    return this.http.get<any>(this.recipeIngredientsUrl);
  }
}
