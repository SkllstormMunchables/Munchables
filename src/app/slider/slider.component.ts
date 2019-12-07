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
    console.log(recipeName);
    // if (!recipeName) { return; }
    this.recipesService.addRecipes({recipeName} as Recipe).subscribe(recipe => {
      this.recipes.push(recipe);
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
    this.ingredientsService.getIngredients().subscribe(ingredients => {
      this.ingredient = ingredients;
    });
  }
}

//test
