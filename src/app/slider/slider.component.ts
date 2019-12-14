import { RecipeIngredients } from './../models/recipeIngredients';
import { ingredients } from './../mockDB';
import { RecipeIngredientsService } from './../recipe-ingredients.service';
import { Ingredients } from './../models/ingredients';
import { StepsService } from './../steps.service';
import { IngredientsService } from './../ingredients.service';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../models/recipe';
import { Component, OnInit } from '@angular/core';
import { Steps } from '../models/steps';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  recipes: Recipe[] = [];
  steps: Steps[] = [];
  ingredient: Ingredients[] = [];
  recipeIngredients: RecipeIngredients[] = [];

  listOfIngredients = [];

  public show = true;
  public buttonShowEdit = 'Edit';

  public leftPageNumber = 1;
  public rightPageNumber = 2;
  public numberOfPagesAdded = 2;

  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private recipeIngredientsService: RecipeIngredientsService,
    private stepsService: StepsService
  ) {}

  ngOnInit() {
    this.getRecipes();
    this.getIngredient();
    this.getRecipeIngredients();
    this.getSteps();
  }
  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonShowEdit = 'Edit';
    } else {
      this.buttonShowEdit = 'Done';
    }
  }
  turnPage(dir: number) {
    if (dir === 0) {
      if (this.leftPageNumber < 0) {
        // do nothing
      } else {
        this.leftPageNumber -= this.numberOfPagesAdded;
        this.rightPageNumber -= this.numberOfPagesAdded;
      }
    } else {
      if (this.rightPageNumber > this.recipes.length - 1) {
        // do nothing
      } else {
        this.leftPageNumber += this.numberOfPagesAdded;
        this.rightPageNumber += this.numberOfPagesAdded;
      }
    }
  }

  // ~~~~~~~~~~~~~~~~ RECIPES ~~~~~~~~~~~~~~~~~~~~~~~~~~

  genRecipeId(recipe: Recipe[]): number {
    return recipe.length > 0
      ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1
      : 1;
  }

  getRecipes(): void {
    this.recipesService.getRecipes().subscribe(recipe => {
      this.recipes = recipe;
    });
  }

  addRecipes(recipeName: string): void {
    if (!recipeName) {
      return;
    }
    this.recipesService
      .addRecipes({ recipeName } as Recipe)
      .subscribe(recipe => {
        recipe.recipeId = this.genRecipeId(this.recipes);
        this.recipes.push(recipe);
        console.log('addRecipes' + recipe);
      });
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes = this.recipes.filter(r => r !== recipe);
    this.recipesService.deleteRecipes(recipe).subscribe();
  }

  // ~~~~~~~~~~~~~~~~ INGREDIENTS ~~~~~~~~~~~~~~~~~~~~~~~~~~

  genIngredientId(temp: Ingredients[]): number {
    return temp.length > 0
      ? Math.max(...temp.map(ingredient => ingredient.ingredientId)) + 1
      : 1;
  }
  getIngredient(): void {
    // tslint:disable-next-line: no-shadowed-variable
    this.ingredientsService.getIngredients().subscribe(ingredients => {
      this.ingredient = ingredients;
    });
  }
  /**
   * Gets all ingredients from a recipe and returns every other ingredient
   * (half == 0 or half == 1) determines which half
   * Used for a two column table
   */
  getHalfIngredientsFromRecipe(recipeId: number, half: number) {
    let ingredientTotal = 0;
    const ingredientList = [];
    for (const recipeIngredient of this.recipeIngredients) {
      if (recipeId === recipeIngredient.recipeId) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.ingredient.length; i++) {
          if (
            recipeIngredient.ingredientId === this.ingredient[i].ingredientId
          ) {
            if (ingredientTotal % 2 === half) {
              ingredientList.push(this.ingredient[i]);
            }
            ingredientTotal++;
          }
        }
      }
    }
    return ingredientList;
  }
  addIngredient(name: string, recipeId: number): void {
    console.log('addIngredient Begin');
    if (!name) {
      return;
    }
    this.ingredientsService
      .addIngredient({ name } as Ingredients)
      .subscribe(temp => {
        temp.ingredientId = this.genIngredientId(this.ingredient);
        this.ingredient.push(temp);
        this.addRecipeIngredientRecipe(recipeId);
        console.log('addIngredient ' + temp);
      });
  }
  deleteIngredient(ingredient: Ingredients) {
    for (let i = 0; i < this.recipeIngredients.length; i++) {
      if (ingredient.ingredientId === this.recipeIngredients[i].ingredientId) {
        this.recipeIngredients.splice(i, 1);
      }
    }
  }
  // ~~~~~~~~~~~~~~~~ RECIPE INGREDIENTS ~~~~~~~~~~~~~~~~~~~~~~~~~~

  getRecipeIngredients(): void {
    this.recipeIngredientsService
      .getRecipeIngredients()
      .subscribe(recipeIngredient => {
        this.recipeIngredients = recipeIngredient;
      });
  }
  addRecipeIngredientRecipe(id: number): void {
    const tempRecipeIngredient = new RecipeIngredients();

    length = this.ingredient.length - 1;
    tempRecipeIngredient.ingredientId = this.ingredient[length].ingredientId;

    tempRecipeIngredient.recipeId = this.recipes[id].recipeId;

    this.recipeIngredients.push(tempRecipeIngredient);
    console.log('addRecipeIngredientRecipe' + this.recipeIngredients);
  }

  // ~~~~~~~~~~~~~~~~~~~~ STEPS ~~~~~~~~~~~~~~~~~~~~~~~~~~

  genStepId(temp: Steps[]): number {
    return temp.length > 0
      ? Math.max(...temp.map(steps => steps.stepId)) + 1
      : 1;
  }
  getSteps(): void {
    this.stepsService.getSteps().subscribe(step => {
      this.steps = step;
    });
  }
  addSteps(step: string, recipeId: number): void {
    console.log('addStep Begin');
    this.stepsService.addSteps({ step } as Steps).subscribe(temp => {
      temp = new Steps();
      temp.step = step;
      temp.stepId = this.genStepId(this.steps);
      temp.recipeId = this.recipes[recipeId].recipeId;
      this.steps.push(temp);
      console.log('addStep' + this.steps);
    });
  }
}
