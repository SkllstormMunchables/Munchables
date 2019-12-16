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
    { recipeId: 4, recipeName: 'Fried Pickles'},
    { recipeId: 5, recipeName: 'Tacos'},
    { recipeId: 6, recipeName: 'New Recipe'}
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
    {ingredientId: 18, name: 'pickles' },
    {ingredientId: 19, name: 'cornmeal' },
    {ingredientId: 20, name: 'seafood seasoning' },
    {ingredientId: 21, name: 'cajun seasoning' },
    {ingredientId: 22, name: 'oil' },
    // Tacos
    {ingredientId: 23, name: 'ground beef' },
    {ingredientId: 24, name: 'onion' },
    {ingredientId: 25, name: 'chili powder' },
    {ingredientId: 26, name: 'garlic powder' },
    {ingredientId: 27, name: 'tomato sauce'},
    {ingredientId: 28, name: 'taco shells' },
    {ingredientId: 29, name: 'shredded cheddar cheese' },
    {ingredientId: 30, name: 'shredded lettuce' },
    {ingredientId: 31, name: 'tomatoes' }

  ];

   const recipeIngredients = [
    // Cereal
    {recipeId: 1, ingredientId: 1 },
    {recipeId: 1, ingredientId: 2 },
    // Pizza
    {recipeId: 2, ingredientId: 3 },
    {recipeId: 2, ingredientId: 4 },
    {recipeId: 2, ingredientId: 5 },
    {recipeId: 2, ingredientId: 6 },
    // Cookies
    {recipeId: 3, ingredientId: 7 },
    {recipeId: 3, ingredientId: 8 },
    {recipeId: 3, ingredientId: 9 },
    {recipeId: 3, ingredientId: 10 },
    {recipeId: 3, ingredientId: 11 },
    {recipeId: 3, ingredientId: 12 },
    {recipeId: 3, ingredientId: 13 },
    {recipeId: 3, ingredientId: 14 },
    {recipeId: 3, ingredientId: 15 },
    // Fried Pickles
    {recipeId: 4, ingredientId: 13 },
    {recipeId: 4, ingredientId: 14 },
    {recipeId: 4, ingredientId: 16 },
    {recipeId: 4, ingredientId: 17 },
    {recipeId: 4, ingredientId: 18 },
    {recipeId: 4, ingredientId: 19 },
    {recipeId: 4, ingredientId: 20 },
    {recipeId: 4, ingredientId: 21 },
    {recipeId: 4, ingredientId: 22 },
    // Tacos
    {recipeId: 5, ingredientId: 23 },
    {recipeId: 5, ingredientId: 24 },
    {recipeId: 5, ingredientId: 25 },
    {recipeId: 5, ingredientId: 26 },
    {recipeId: 5, ingredientId: 27 },
    {recipeId: 5, ingredientId: 28 },
    {recipeId: 5, ingredientId: 29 },
    {recipeId: 5, ingredientId: 30 },
    {recipeId: 5, ingredientId: 31 }

  ];
   const steps = [
    // Cereal
    { stepId: 1, step: 'Put cereal into bowl. Add milk.', recipeId: 1},
    // Pizza
    { stepId: 2, step: 'Preheat oven to 425 degrees F.', recipeId: 2},
    { stepId: 3, step: 'Add sauce, dough, cheese, and any toppings you desire to the dough.', recipeId: 2},
    { stepId: 4, step: 'Bake in oven for about 15 minutes, or until crust is golden brown.', recipeId: 2},
    // Cookies
    { stepId: 5, step: 'Preheat oven to 350 degrees F.', recipeId: 3},
    { stepId: 6, step: 'Mix all ingredients. Drop large spoonfuls onto ungreased pan.', recipeId: 3},
    { stepId: 7, step: 'Bake in oven for about 10 minutes, or until edges are golden brown.', recipeId: 3},
    // Fried Pickles
    { stepId: 8, step: 'In a bag, mix all ingredients except buttermilk, oil, and pickles.', recipeId: 4},
    { stepId: 9, step: 'Add the pickles to a bowl of buttermilk and then put pickles into the bag and shake.', recipeId: 4},
    { stepId: 10, step: 'Heat oil to 350 degrees in a fryer or a frying pan.', recipeId: 4},
    { stepId: 11, step: 'Fry pickles for 1-2 minutes or until golden brown on each side.', recipeId: 4},
    // Tacos
    { stepId: 12, step: 'Heat oven to 250 degrees F. Heat ground beef in skillet until beef is throughly cooked. Drain.', recipeId: 5},
    { stepId: 13, step: 'Stir in tomato sauce and seasoning. Simmer for 10 minutes.', recipeId: 5},
    { stepId: 14, step: 'Place taco shells on ungreased cookie sheet. Heat 250 degrees F for 5 minutes.', recipeId: 5},
    { stepId: 15, step: 'Assemble tacos. Layer beef mixture, cheese, lettuce, and tomatoes in shell. Enjoy', recipeId: 5}
  ];
   return {recipe, ingredients, recipeIngredients, steps};
}

genId(recipe: Recipe[]): number {
  console.log('in-memory-data.service: genId');
  return recipe.length > 0 ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1 : 1;
}

}
