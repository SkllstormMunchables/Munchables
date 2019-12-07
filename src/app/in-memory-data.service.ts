import { recipe } from './mockDB';
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
    {ingredientId: 1, name: 'milk', recipeId: 1 },
    {ingredientId: 2, name: 'Count Chocula', recipeId: 1 },
    // Pizza
    {ingredientId: 3, name: 'dough', recipeId: 2 },
    {ingredientId: 4, name: 'pizza sauce', recipeId: 2 },
    {ingredientId: 5, name: 'mozzarella', recipeId: 2 },
    {ingredientId: 6, name: 'pepperoni', recipeId: 2 },
    // Cookies
    {ingredientId: 7, name: 'butter', recipeId: 3 },
    {ingredientId: 8, name: 'sugar', recipeId: 3 },
    {ingredientId: 9, name: 'brown sugar', recipeId: 3 },
    {ingredientId: 10, name: 'eggs', recipeId: 3 },
    {ingredientId: 11, name: 'vanilla extract', recipeId: 3 },
    {ingredientId: 12, name: 'baking soda', recipeId: 3 },
    {ingredientId: 13, name: 'salt', recipeId: 3 },
    {ingredientId: 14, name: 'flour', recipeId: 3 },
    {ingredientId: 15, name: 'chocolate chips', recipeId: 3 },
    // Fried Pickles
    {ingredientId: 16, name: 'buttermilk', recipeId: 4 },
    {ingredientId: 17, name: 'pepper', recipeId: 4 },
    {ingredientId: 18, name: 'pickles(sliced)', recipeId: 4 },
    {ingredientId: 19, name: 'flour', recipeId: 4 },
    {ingredientId: 20, name: 'cornmeal', recipeId: 4 },
    {ingredientId: 21, name: 'seafood seasoning', recipeId: 4 },
    {ingredientId: 21, name: 'cajun seasoning', recipeId: 4 },
    {ingredientId: 23, name: 'oil', recipeId: 4 },

  ]; // Change
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
    { stepId: 8, step: 'In a bag, mix all ingredients except buttermilk, oil, and pickles', recipeId: 4},
    { stepId: 9, step: 'Add the pickles to a bowl of buttermilk and then put pickles into the bag and shake.', recipeId: 4},
    { stepId: 10, step: 'Heat oil to 350 degrees in a fryer or a frying pan', recipeId: 4},
    { stepId: 11, step: 'Fry pickles for 1-2 minutes or until golden brown on each side', recipeId: 4}
  ];
   return {recipe, ingredients, steps};
}

genId(recipe: Recipe[]): number {
  return recipe.length > 0 ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1 : 11;
}
}
