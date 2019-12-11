<<<<<<< HEAD
import { RecipeIngredientsService } from "./../recipe-ingredients.service";
=======


>>>>>>> fea955026fdc6ccc1d2ac9484483c5716d791fe2
import { Ingredients } from "./../models/ingredients";
import { StepsService } from "./../steps.service";
import { IngredientsService } from "./../ingredients.service";
import { RecipesService } from "./../recipes.service";
import { Recipe } from "./../models/recipe";
import { Component, OnInit } from "@angular/core";
import { Steps } from "../models/steps";
<<<<<<< HEAD
import { RecipeIngredients } from "../models/recipeIngredients";

// import 'turn.min.js';
=======

>>>>>>> fea955026fdc6ccc1d2ac9484483c5716d791fe2

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.css"]
})
export class SliderComponent implements OnInit {
  recipes: Recipe[] = [];
  steps: Steps[] = [];
<<<<<<< HEAD
  ingredient: Ingredients[] = [];
  recipeIngredients: RecipeIngredients[] = [];
=======
  ingredients: Ingredients[] = [];
>>>>>>> fea955026fdc6ccc1d2ac9484483c5716d791fe2

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

  genRecipeId(recipe: Recipe[]): number {
    return recipe.length > 0
      ? Math.max(...recipe.map(recipes => recipes.recipeId)) + 1
      : 5;
  }

  addRecipes(recipeName: string): void {
    if (!recipeName) {
      return;
    }
    this.recipesService
      .addRecipes({ recipeName } as Recipe)
      .subscribe(recipe => {
<<<<<<< HEAD
        recipe.recipeId = this.genRecipeId(this.recipes);
        this.recipes.push(recipe);
        console.log(recipe);
      });
=======
        recipe.recipeId = this.genRecipeId;

        this.recipes.push(recipe);
        console.log(recipe);
      });
  }

  geneId(ingredients: Ingredients[]): number {
    return ingredients.length > 0
      ? Math.max(...ingredients.map(ingredient => ingredient.recipeId)) + 1
      : 5;
  }

  generateIngredientId(ingredients: Ingredients[]): number {
    return ingredients.length > 0
      ? Math.max(...ingredients.map(ingredient => ingredient.ingredientId)) + 1
      : 5;
  }

  addIngredient(name: string): void {
    this.ingredientsService
      .addIngredient({ name } as Ingredients)
      .subscribe(ingredient => {
        // this.generateIngredientId(ingredients);
        ingredient.recipeId = this.genRecipeId;
        this.ingredients.push(ingredient);
        console.log(ingredient);
        console.log(name);
      });
  }
  generateSteps(theseSteps: Steps[]): number {
    return theseSteps.length > 0
      ? Math.max(...theseSteps.map(stepNew => stepNew.recipeId)) + 1
      : 11;
  }

  addSteps(step: string): void {
    this.stepsService.addSteps({ step } as Steps).subscribe(newSteps => {
      newSteps.recipeId = this.genRecipeId;
      this.steps.push(newSteps);
      console.log(newSteps);
    });
>>>>>>> fea955026fdc6ccc1d2ac9484483c5716d791fe2
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
    this.ingredientsService.getIngredients().subscribe(ingredient => {
      this.ingredients = ingredient;
    });
  }

  addSteps(step: string): void {
    this.stepsService.addSteps({ step } as Steps).subscribe(steps => {
      this.steps.push(steps);
    });
  }
}

//test
