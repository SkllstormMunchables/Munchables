import { Measurements } from './models/measurements';
import { Steps } from './models/steps';
import { Recipe } from './models/recipe';
import { Ingredients } from './models/ingredients';

export const recipe: Recipe[] = [
  { recipeId: 1, recipeName: 'Cereal' },
  { recipeId: 2, recipeName: 'Pizza' },
  { recipeId: 3, recipeName: 'Cookies' },
];

// ************** Probably need to put quantity and measurement in a table by itself
export const ingredients: Ingredients[] = [
  // Cereal
  {ingredientId: 1, name: 'milk', quantity: 8, measurementId: 3 },
  {ingredientId: 2, name: 'Count Chocula', quantity: 2, measurementId: 4 },
  // Pizza
  {ingredientId: 3, name: 'dough', quantity: 8, measurementId: 8 },
  {ingredientId: 4, name: 'pizza sauce', quantity: 8, measurementId: 3 },
  {ingredientId: 5, name: 'mozzarella', quantity: 2, measurementId: 4 },
  {ingredientId: 6, name: 'pepperoni', quantity: 8, measurementId: 8 },
  // Cookies
  {ingredientId: 7, name: 'butter', quantity: 1, measurementId: 4 },
  {ingredientId: 8, name: 'sugar', quantity: 1, measurementId: 4 },
  {ingredientId: 9, name: 'brown sugar', quantity: 1, measurementId: 4 },
  {ingredientId: 10, name: 'eggs', quantity: 2, measurementId: 10 },
  {ingredientId: 11, name: 'vanilla extract', quantity: 2, measurementId: 1 },
  {ingredientId: 12, name: 'baking soda', quantity: 1, measurementId: 1 },
  {ingredientId: 13, name: 'salt', quantity: 0.5, measurementId: 1 },
  {ingredientId: 14, name: 'flour', quantity: 3, measurementId: 4 },
  {ingredientId: 15, name: 'chocolate chips', quantity: 2, measurementId: 4 },

];
export const measurements: Measurements[] = [
  { measurementId: 1, measurement: 'teaspoon' },
  { measurementId: 2, measurement: 'tablespoon' },
  { measurementId: 3, measurement: 'fluid ounce' },
  { measurementId: 4, measurement: 'cup' },
  { measurementId: 5, measurement: 'pint' },
  { measurementId: 6, measurement: 'quart' },
  { measurementId: 7, measurement: 'gallon' },
  { measurementId: 8, measurement: 'ounce' },
  { measurementId: 9, measurement: 'pound' },
  { measurementId: 10, measurement: '' } // used for each/whole
  // example 2 eggs. No need for a unitOfMeasure
];

export const steps: Steps[] = [
  // Cereal
  { stepId: 1, step: 'Put cereal into bowl. Add milk', recipeId: 1},
  // Pizza
  { stepId: 2, step: 'Preheat oven to 425 degrees F', recipeId: 2},
  { stepId: 3, step: 'Add sauce, dough, cheese, and any toppings you desire to the dough', recipeId: 2},
  { stepId: 4, step: 'Bake in oven for about 15 minutes, or until crust is golden brown', recipeId: 2},
  // Cookies
  { stepId: 5, step: 'Preheat oven to 350 degrees F', recipeId: 3},
  { stepId: 6, step: 'Mix all ingredients. Drop large spoonfuls onto ungreased pan', recipeId: 3},
  { stepId: 7, step: 'Bake in oven for about 10 minutes, or until edges are golden brown', recipeId: 3}
];
