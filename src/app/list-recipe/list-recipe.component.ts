import { Ingredients } from "./../models/ingredients";
import { StepsService } from "./../steps.service";
import { IngredientsService } from "./../ingredients.service";
import { RecipesService } from "./../recipes.service";
import { Recipe } from "./../models/recipe";
import { Component, OnInit } from "@angular/core";
import { Steps } from "../models/steps";

@Component({
  selector: "app-list-recipe",
  templateUrl: "./list-recipe.component.html",
  styleUrls: ["./list-recipe.component.css"]
})
export class ListRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  step: Steps[] = [];
  ingredient: Ingredients[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(
    private recipesService: RecipesService,
    private stepsService: StepsService,
    private ingredientsService: IngredientsService
  ) {}


  ngOnInit() {
    // this.addIngredient();
    // this.addRecipes();
    // this.addSteps();
    // this.getRecipes();

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
        // recipe.recipeId = this.genRecipeId;

        this.recipes.push(recipe);
        console.log(recipe);
      });
  }
  addIngredient(name: string): void {
    this.ingredientsService
      .addIngredient({ name } as Ingredients)
      .subscribe(ingredients => {
        // this.generateIngredientId(ingredients);
        // ingredients.recipeId = this.genRecipeId;
        this.ingredient.push(ingredients);
        console.log(ingredients);
        console.log(name);
      });
  }
  addSteps(step: string): void {
    this.stepsService.addSteps({ step } as Steps).subscribe(newSteps => {
      // newSteps.recipeId = this.genRecipeId;
      this.step.push(newSteps);
      console.log(newSteps);
    });
  }


}
