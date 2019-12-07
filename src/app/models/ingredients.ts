export class Ingredients {
  ingredientId: number;
  name: string;
  quantity: number;
  unitOfMeasureId: number;

  constructor() {
    this.name = null;
    this.quantity = null;
    this.ingredientId = null;
    this.unitOfMeasureId = null;
  }
}
