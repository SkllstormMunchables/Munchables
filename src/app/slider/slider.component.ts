import { Ingredients } from "./../models/ingredients";
import { StepsService } from "./../steps.service";
import { IngredientsService } from "./../ingredients.service";
import { RecipesService } from "./../recipes.service";
import { Recipe } from "./../models/recipe";
import { Component, OnInit } from "@angular/core";
import { Steps } from "../models/steps";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  recipes: Recipe[] = [];
  steps: Steps[] = [];
  ingredients: Ingredients[] = [];

  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private stepsService: StepsService
  ) {}

  ngOnInit() {
    this.getRecipes();
    this.getSteps();
    this.getIngredient();
  }

  genRecipeId(recipe: Recipe[]): number {
    return recipe.length > 0 ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1 : 11;
  }

  addRecipes(recipeName: string): void {
    if (!recipeName) { return; }
    this.recipesService.addRecipes({recipeName} as Recipe).subscribe(recipe => {
      recipe.recipeId = this.genRecipeId(this.recipes);
      this.recipes.push(recipe);
    });
  }

  geneId(ingredients: Ingredients[]): number {
    return ingredients.length > 0 ? Math.max(...ingredients.map(ingredient => ingredient.recipeId)) + 1 : 11;
  }

  addIngredient(name: string): void {
    this.ingredientsService
      .addIngredient({ name } as Ingredients)
      .subscribe(ingredient => {
        ingredient.recipeId = this.geneId(this.ingredients);
        this.ingredients.push(ingredient);
        console.log(ingredient);
        console.log(name);
      });
  }
  generateId(step: Steps[]): number {
    return step.length > 0 ? Math.max(...step.map(steps => steps.recipeId)) + 1 : 11;
  }

  addSteps(step: string): void {
    this.stepsService.addSteps({ step } as Steps).subscribe(newSteps => {
      newSteps.recipeId = this.generateId(this.steps);
      this.steps.push(newSteps);
      console.log(newSteps);

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

  getIngredient(): void {
    this.ingredientsService.getIngredients().subscribe(ingredient => {
      this.ingredients = ingredient;
    });
  }
}

//test
