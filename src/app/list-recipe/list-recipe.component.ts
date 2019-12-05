import { IngredientsService } from "./../ingredients.service";
import { StepsService } from "./../steps.service";
import { RecipesService } from "./../recipes.service";
import { Component, OnInit } from "@angular/core";
import { Recipe } from "../models/recipe";
import { Steps } from "../models/steps";
import { Ingredients } from "../models/ingredients";

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
    this.recipesService.list().subscribe(dummy => {
      console.log(dummy);
      this.recipes = dummy;
    });

    this.stepsService.list().subscribe(dummy => {
      console.log(dummy);
      this.step = dummy;
    });

    this.ingredientsService.list().subscribe(dummy => {
      console.log(dummy);
      this.ingredient = dummy;
    });
  }
}
