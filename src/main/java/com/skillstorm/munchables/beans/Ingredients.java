package com.skillstorm.munchables.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ingredients {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "INGREDIENT_ID")
	public int ingredientId;
	
	@Column(name="INGREDIENT_NAME")
	public String name;
	
	@Column(name = "RECIPE_ID")
	public int recipeId;

	public Ingredients() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ingredients(int ingredientId, String name, int recipeId) {
		super();
		this.ingredientId = ingredientId;
		this.name = name;
		this.recipeId = recipeId;
	}

	public int getIngredientId() {
		return ingredientId;
	}

	public void setIngredientId(int ingredientId) {
		this.ingredientId = ingredientId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}

	@Override
	public String toString() {
		return "Ingredients [ingredientId=" + ingredientId + ", name=" + name + ", recipeId=" + recipeId + "]";
	}

}
