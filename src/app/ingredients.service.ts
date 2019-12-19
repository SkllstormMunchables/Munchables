import { Observable } from 'rxjs';
import { Ingredients } from './models/ingredients';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private ingredientsUrl = 'http://localhost:8080/ingredients/';

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<any> {
    return this.http.get<any>(this.ingredientsUrl + 'all');
  }

  addIngredient(ingredient: Ingredients): Observable<any> {
    return this.http.post<any>(
      this.ingredientsUrl,
      ingredient,
      this.httpHeaders
    );
  }

  deleteIngredient(ingredient: Ingredients | number): Observable<any> {
    console.log('slider.service: deleteIngredient: ' + ingredient);
    const id =
      typeof ingredient === 'number' ? ingredient : ingredient.ingredientId;
    const url = `${this.ingredientsUrl + '/update'}/${id}`;
    return this.http.delete<any>(url, this.httpHeaders);
  }

  updateIngredient(ingredient: Ingredients): Observable<any> {
    return this.http.put(this.ingredientsUrl, ingredient, this.httpHeaders);
  }
}
