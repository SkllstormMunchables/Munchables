import { RecipesService } from "./../recipes.service";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.css"]
})
export class AddRecipeComponent implements OnInit {
  dummy: Recipe = new Recipe();
  addRecipe(): void {
    this.recipesService.add(this.dummy);
    this.dummy = new Recipe();
  }

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}
}
