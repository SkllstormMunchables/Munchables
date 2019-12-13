import { ingredients } from './../mockDB';
import { RecipeIngredientsService } from './../recipe-ingredients.service';
import { Ingredients } from './../models/ingredients';
import { StepsService } from './../steps.service';
import { IngredientsService } from './../ingredients.service';
import { RecipesService } from './../recipes.service';
import { Recipe } from './../models/recipe';
import { Component, OnInit } from '@angular/core';
import { Steps } from '../models/steps';
import { RecipeIngredients } from '../models/recipeIngredients';

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

  toggle() {
    this.show = !this.show;

    if (this.show) {
      this.buttonShowEdit = 'Edit';
    } else {
      this.buttonShowEdit = 'Done';
    }
  }
  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private stepsService: StepsService,
    private recipeIngredientsService: RecipeIngredientsService
  ) {}

  ngOnInit() {
    this.getRecipes();
    this.getSteps();
    this.getIngredient();
    this.getRecipeIngredients();
  }
  turnPage(dir: number) {
    if (dir === 0) {
      if (this.leftPageNumber < 0) {
        // do nothing
      } else {
        this.leftPageNumber -= this.numberOfPagesAdded;
        this.rightPageNumber -= this.numberOfPagesAdded;
        console.log('if:' + this.leftPageNumber);
        console.log('if:' + this.rightPageNumber);
      }
    } else {
      if (this.rightPageNumber > this.recipes.length - 1) {
        // do nothing
      } else {
        this.leftPageNumber += this.numberOfPagesAdded;
        this.rightPageNumber += this.numberOfPagesAdded;
      }
      console.log('else:' + this.leftPageNumber);
      console.log('else:' + this.rightPageNumber);
    }
    console.log('leftPageNumber: ' + this.leftPageNumber);
    console.log('rightPageNumber: ' + this.rightPageNumber);
    console.log('this.ingredient');
    console.log(' this.recipeIngredients');
  }

  genRecipeId(recipe: Recipe[]): number {
    return recipe.length > 0
      ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1
      : 1;
  }
  genIngredientId(temp: Ingredients[]): number {
    return temp.length > 0
      ? Math.max(...temp.map(ingredient => ingredient.ingredientId)) + 1
      : 1;
  }
  genStepId(temp: Steps[]): number {
    return temp.length > 0
      ? Math.max(...temp.map(steps => steps.stepId)) + 1
      : 1;
  }

  getRecipeIngredients(): void {
    this.recipeIngredientsService
      .getRecipeIngredients()
      .subscribe(recipeIngredient => {
        this.recipeIngredients = recipeIngredient;
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

  getRecipes(): void {
    this.recipesService.getRecipes().subscribe(recipe => {
      this.recipes = recipe;
    });
  }
  getSteps(): void {
    this.stepsService.getSteps().subscribe(step => {
      this.steps = step;
    });
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
        console.log('addIngredient' + temp);
      });
  }
  getIngredient(): void {
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
          if (recipeIngredient.ingredientId === this.ingredient[i].ingredientId) {
            if (ingredientTotal % 2 === half) {
              ingredientList.push(this.ingredient[i].name);
            }
            ingredientTotal++;
          }
        }
      }
    }
    return ingredientList;
  }
  deleteIngredient(id: number) {
    console.log('slider.component: deleteIngredient: ' + id);
    this.ingredientsService.deleteIngredient(this.ingredient[id]).subscribe();
    this.ingredient.splice(id, 1);
    console.log('slider.component: deleteIngredient object: ' + this.ingredient[id]);
  }
  addRecipeIngredientRecipe(id: number): void {
    const tempRecipeIngredient = new RecipeIngredients();

    length = this.ingredient.length - 1;
    tempRecipeIngredient.ingredientId = this.ingredient[length].ingredientId;

    tempRecipeIngredient.recipeId = this.recipes[id].recipeId;

    this.recipeIngredients.push(tempRecipeIngredient);
    console.log('addRecipeIngredientRecipe' + this.recipeIngredients);
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
