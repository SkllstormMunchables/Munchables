import { IngredientsService } from './../ingredients.service';
import { Ingredients } from './../models/ingredients';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent implements OnInit {
  ingredient: Ingredients[];

  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients(): void {
    this.ingredientsService
      .getIngredients()
      .subscribe(ingredient => (this.ingredient = ingredient));
  }

  addIngredient(ingredients: Ingredients): void {
    this.ingredientsService.addIngredient(ingredients).subscribe(ingredient => {
      this.ingredient.push(ingredient);
    });
  }
}
