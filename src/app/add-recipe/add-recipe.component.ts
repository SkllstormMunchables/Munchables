import { recipe } from './../mockDB';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { IngredientsService } from '../ingredients.service';
import { StepsService } from '../steps.service';
import { Ingredients } from '../models/ingredients';
import { Steps } from '../models/steps';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipes: Recipe[];
  ingredient: Ingredients[];
  step: Steps[];

  constructor(private recipesService: RecipesService, private ingredientsService: IngredientsService, private stepsService: StepsService) {}

  ngOnInit() {
    this.getRecipes();
    this.getIngredients();
    this.getSteps();

  }
  getRecipes(): void {
    this.recipesService
      .getRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }

  getIngredients(): void {
    this.ingredientsService
      .getIngredients()
      .subscribe(ingredient => (this.ingredient = ingredient));
  }

  getSteps(): void {
    this.stepsService
      .getSteps()
      .subscribe(steps => (this.step = steps));
  }

  addRecipes(recipeName: string): void {
  this.recipesService.addRecipes({ recipeName } as Recipe).subscribe(newRecipes => {
      this.recipes.push(newRecipes);
    console.log(recipeName);
    console.log(newRecipes);
    });
  }

  addIngredient(ingredients: Ingredients): void {
    this.ingredientsService.addIngredient(ingredients).subscribe(ingredient => {
      this.ingredient.push(ingredient);
    });
  }

  addSteps(step: Steps): void {
    this.stepsService.addSteps(step).subscribe(steps => {
      this.step.push(steps);
    });
  }
}
