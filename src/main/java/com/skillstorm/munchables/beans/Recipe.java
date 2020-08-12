package com.skillstorm.munchables.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToMany;

@Entity
public class Recipe {
	
	@Id
	@Column(name = "RECIPE_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	public int recipeId;
	
	@Column(name = "RECIPE_NAME")
	public String recipeName;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "")
	
	private Ingredients ingredient;
	
	public Recipe() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Recipe(int recipeId, String recipeName) {
		super();
		this.recipeId = recipeId;
		this.recipeName = recipeName;
	}
	public int getRecipeId() {
		return recipeId;
	}
	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}
	public String getRecipeName() {
		return recipeName;
	}
	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}
	@Override
	public String toString() {
		return "Recipe [recipeId=" + recipeId + ", recipeName=" + recipeName + "]";
	}
	
	
}
