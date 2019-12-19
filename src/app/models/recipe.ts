import { Ingredients } from './ingredients';
import { Steps } from './steps';

export class Recipe {
  recipeId: number;
  recipeName: string;
  recipeIngredients: Ingredients[];
  steps: Steps[];

  constructor() {
    this.recipeId = 0;
    this.recipeName = null;
  }
}
