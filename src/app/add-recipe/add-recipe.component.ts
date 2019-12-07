import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.getRecipes();
  }
  getRecipes(): void {
    this.recipesService
      .getRecipes()
      .subscribe(recipes => (this.recipes = recipes));
  }

  addRecipes(recipes: Recipe): void {
    this.recipesService.addRecipes(recipes).subscribe(recipe => {
      this.recipes.push(recipe);
    });
  }
}
