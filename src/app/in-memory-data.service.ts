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
   const ingredients = [
    // Cereal
    {ingredientId: 1, name: 'milk' },
    {ingredientId: 2, name: 'Count Chocula' },
    // Pizza
    {ingredientId: 3, name: 'dough' },
    {ingredientId: 4, name: 'pizza sauce' },
    {ingredientId: 5, name: 'mozzarella' },
    {ingredientId: 6, name: 'pepperoni' },
    // Cookies
    {ingredientId: 7, name: 'butter' },
    {ingredientId: 8, name: 'sugar' },
    {ingredientId: 9, name: 'brown sugar' },
    {ingredientId: 10, name: 'eggs' },
    {ingredientId: 11, name: 'vanilla extract' },
    {ingredientId: 12, name: 'baking soda' },
    {ingredientId: 13, name: 'salt' },
    {ingredientId: 14, name: 'flour' },
    {ingredientId: 15, name: 'chocolate chips' },
    // Fried Pickles
    {ingredientId: 16, name: 'buttermilk' },
    {ingredientId: 17, name: 'pepper' },
    {ingredientId: 18, name: 'pickles(sliced)' },
    {ingredientId: 19, name: 'flour' },
    {ingredientId: 20, name: 'cornmeal' },
    {ingredientId: 21, name: 'seafood seasoning' },
    {ingredientId: 21, name: 'cajun seasoning' },
    {ingredientId: 23, name: 'oil' },

  ];
   const steps = [
    // Cereal
    { stepId: 1, step: 'Put cereal into bowl. Add milk', recipeId: 1},
    // Pizza
    { stepId: 2, step: 'Preheat oven to 425 degrees F', recipeId: 2},
    { stepId: 3, step: 'Add sauce, dough, cheese, and any toppings you desire to the dough', recipeId: 2},
    { stepId: 4, step: 'Bake in oven for about 15 minutes, or until crust is golden brown', recipeId: 2},
    // Cookies
    { stepId: 5, step: 'Preheat oven to 350 degrees F', recipeId: 3},
    { stepId: 6, step: 'Mix all ingredients. Drop large spoonfuls onto ungreased pan', recipeId: 3},
    { stepId: 7, step: 'Bake in oven for about 10 minutes, or until edges are golden brown', recipeId: 3},
    // Fried Pickles
    { stepId: 8, step: 'Preheat oven to 350 degrees F', recipeId: 4},
    { stepId: 9, step: 'Mix all ingredients. Drop large spoonfuls onto ungreased pan', recipeId: 4},
    { stepId: 10, step: 'Bake in oven for about 10 minutes, or until edges are golden brown', recipeId: 4}
  ];
   return {recipe, ingredients, steps};
}

// genId(recipe: Recipe[]): number {
//   return recipe.length > 0 ? Math.max(...recipe.map(hero => recipe.)) + 1 : 11;
// }
}
