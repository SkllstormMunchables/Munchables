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
  step: Steps[] = [];
  ingredient: Ingredients[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(
    private recipesService: RecipesService,
    private ingredientsService: IngredientsService,
    private stepsService: StepsService
  ) {}

  ngOnInit() {}
}
