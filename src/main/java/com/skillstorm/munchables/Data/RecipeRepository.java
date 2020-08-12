package com.skillstorm.munchables.Data;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.skillstorm.munchables.beans.Ingredients;
import com.skillstorm.munchables.beans.Measurements;
import com.skillstorm.munchables.beans.Recipe;
import com.skillstorm.munchables.beans.Steps;

public class RecipeRepository {

private SessionFactory sessionFactory = new Configuration().configure().buildSessionFactory();

//adding Recipes, Ingredients, measurements, and Steps
		
	public void insert(Recipe recipe ) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(recipe);
		tx.commit();
		session.close();
	}
	
	public void insert(Ingredients ingredient ) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(ingredient);
		tx.commit();
		session.close();
	}
	
	public void insert(Steps step ) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(step);
		tx.commit();
		session.close();
	}
	
	public void insert(Measurements measurements) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.save(measurements);
		tx.commit();
		session.close();
	}
	
	//Get Recipe and Ingredients Id
	
	public Recipe findByIdRecipe(int id) {
		Session session = sessionFactory.openSession();
		return (Recipe) session.get(Recipe.class, id);
	}
	
	public Ingredients findByIdIngredient(int id) {
		Session session = sessionFactory.openSession();
		return (Ingredients) session.get(Ingredients.class, id);
	}
	
	public Steps findByIdSteps(int id) {
		Session session = sessionFactory.openSession();
		return (Steps) session.get(Steps.class, id);
	}
	
	public Measurements findByIdMeasurement(int id) {
		Session session = sessionFactory.openSession();
		return (Measurements) session.get(Measurements.class, id);
	}
	
	//Find all Recipe, Measurements, Steps, and Ingredients
	
	public List<Recipe> findAllRecipe(){
		return sessionFactory.openSession().createQuery("from Recipe").list();
		
	}
	
	public List<Ingredients> findAllIngredients(){
		return sessionFactory.openSession().createQuery("from Ingredients").list();
		
	}
	
	public List<Measurements> findAllMeasurements(){
		return sessionFactory.openSession().createQuery("from Measurements").list();
		
	}
	
	public List<Steps> findAllSteps(){
		return sessionFactory.openSession().createQuery("from Steps").list();
		
	}
	
	
	
}
	
	

