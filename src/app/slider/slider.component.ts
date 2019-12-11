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
  // tempRecipeIngredient: RecipeIngredients = new RecipeIngredients();

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
        console.log(recipe);
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
    if (!name) {
      return;
    }
    this.ingredientsService
      .addIngredient({ name } as Ingredients)
      .subscribe(temp => {
        temp.ingredientId = this.genIngredientId(this.ingredient);
        this.ingredient.push(temp);
        this.addRecipeIngredientRecipe(recipeId);
        console.log(temp);
      });
  }
  getIngredient(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => {
      this.ingredient = ingredients;
    });
  }
  addRecipeIngredientRecipe(id: number): void {
    const tempRecipeIngredient = new RecipeIngredients();

    length = this.ingredient.length - 1;
    tempRecipeIngredient.ingredientId = this.ingredient[length].ingredientId;

    tempRecipeIngredient.recipeId = this.recipes[id].recipeId;

    this.recipeIngredients.push(tempRecipeIngredient);
    console.log(this.recipeIngredients);
  }
  addSteps(step: string, recipeId: number): void {
    this.stepsService.addSteps({ step } as Steps).subscribe(temp => {
      temp.stepId = this.genStepId(this.steps);
      temp.recipeId = this.recipes[recipeId].recipeId;
      this.steps.push(temp);
      console.log(this.steps);
    });
  }
}
