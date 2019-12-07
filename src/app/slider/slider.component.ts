import { recipe } from './../mockDB';
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

  addRecipes(recipeName: string): void {
    if (!recipeName) { return };
    this.recipesService
      .addRecipes({ recipeName } as Recipe)
      .subscribe(recipe => {
        this.recipes.push(recipe);
        console.log(recipe);
        
      });
  }
  addIngredient(name: string): void {
    this.ingredientsService.addIngredient({ name } as Ingredients).subscribe(ingredient => {
      this.ingredients.push(ingredient);
      console.log(ingredient);
      console.log(name);

    });
  }

  addSteps(step: Steps): void {
    this.stepsService.addSteps(step).subscribe(step => {
      this.steps.push(step);
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
