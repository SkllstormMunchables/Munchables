import { Steps } from './models/steps';
import { Ingredients } from './models/ingredients';
import { Recipe } from './models/recipe';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const recipe  = [
    { recipeId: 1, recipeName: 'Cereal' },
    { recipeId: 2, recipeName: 'Pizza' },
    { recipeId: 3, recipeName: 'Cookies' },
    { recipeId: 4, recipeName: 'Fried Pickles'}
  ];
   return {recipe};
}

// genId(recipe: Recipe[]): number {
//   return recipe.length > 0 ? Math.max(...recipe.map(hero => recipe.)) + 1 : 11;
// }
}
