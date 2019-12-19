import { ingredients } from './../mockDB';
import { Recipe } from './recipe';

export class RecipeIngredients {
  recipeId: number;
  ingredientId: number;
  // measurementId: number;
  // quantity: number;
   


  constructor() {
    this.recipeId = null;
    this.ingredientId = null;
    // this.measurementId = null;
    // this.quantity = null;
  }
}
