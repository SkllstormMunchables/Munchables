import { IngredientsService } from "./../ingredients.service";
import { Ingredients } from "./../models/ingredients";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-ingredients",
  templateUrl: "./add-ingredients.component.html",
  styleUrls: ["./add-ingredients.component.css"]
})
export class AddIngredientsComponent implements OnInit {
  dummy: Ingredients = new Ingredients();
  addIngredient(): void {
    this.ingredientsService.add(this.dummy);
    this.dummy = new Ingredients();
  }

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {}
}
