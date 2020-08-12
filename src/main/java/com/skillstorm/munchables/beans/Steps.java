package com.skillstorm.munchables.beans;

public class Steps {
public int stepId;
public String step;
public int recipeId;
public Steps() {
	super();
	// TODO Auto-generated constructor stub
}
public Steps(int stepId, String step, int recipeId) {
	super();
	this.stepId = stepId;
	this.step = step;
	this.recipeId = recipeId;
}
public int getStepId() {
	return stepId;
}
public void setStepId(int stepId) {
	this.stepId = stepId;
}
public String getStep() {
	return step;
}
public void setStep(String step) {
	this.step = step;
}
public int getRecipeId() {
	return recipeId;
}
public void setRecipeId(int recipeId) {
	this.recipeId = recipeId;
}
@Override
public String toString() {
	return "Steps [stepId=" + stepId + ", step=" + step + ", recipeId=" + recipeId + "]";
}



}
