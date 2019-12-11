import { RecipeIngredientsService } from "./../recipe-ingredients.service";
import { Ingredients } from "./../models/ingredients";
import { StepsService } from "./../steps.service";
import { IngredientsService } from "./../ingredients.service";
import { RecipesService } from "./../recipes.service";
import { Recipe } from "./../models/recipe";
import { Component, OnInit } from "@angular/core";
import { Steps } from "../models/steps";
import { RecipeIngredients } from "../models/recipeIngredients";

// import 'turn.min.js';

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  recipes: Recipe[] = [];
  steps: Steps[] = [];
  ingredient: Ingredients[] = [];
  recipeIngredients: RecipeIngredients[] = [];

  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private stepsService: StepsService,
    private recipeIngredientsService: RecipeIngredientsService,


  ) {

  }

  ngOnInit() {
    this.getRecipes();
    this.getSteps();
    this.getIngredient();
    this.getRecipeIngredients();
  }

  getRecipeIngredients(): void {
    this.recipeIngredientsService
      .getRecipeIngredients()
      .subscribe(recipeIngredient => {
        this.recipeIngredients = recipeIngredient;
      });
  }
  genRecipeId(recipe: Recipe[]): number {
    return recipe.length > 0
      ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1
      : 1;
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

  genIngredientId(temp: Ingredients[]): number {
    return temp.length > 0
      ? Math.max(...temp.map(ingredient => ingredient.ingredientId)) + 1
      : 1;
  }

  addIngredient(name: string): void {
    this.ingredientsService
      .addIngredient({ name } as Ingredients)
      .subscribe(temp => {
        temp.ingredientId = this.genIngredientId(this.ingredient);
        this.ingredient.push(temp);
        console.log(temp);
      });
  }
  getIngredientById(id: number) {
    return this.ingredient.find(x => x.ingredientId === id).name;
  }
  getIngredient(): void {
    this.ingredientsService.getIngredients().subscribe(ingredients => {
      this.ingredient = ingredients;
    });
  }

  addSteps(step: string): void {
    this.stepsService.addSteps({ step } as Steps).subscribe(steps => {
      this.steps.push(steps);
    });
  }
}
