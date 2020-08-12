package com.skillstorm.munchables.RecipeController;

import java.util.List;

import javax.validation.Valid;

import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.munchables.Data.RecipeRepository;
import com.skillstorm.munchables.Service.RecipeService;
import com.skillstorm.munchables.beans.Recipe;

@RestController
@RequestMapping(value = "api/recipe")

public class RecipeController {

	public static final Logger logger = Logger.getLogger(RecipeController.class);

	@Autowired
	private RecipeRepository recipeRepository;

	@Autowired
	private RecipeService service;

	// Get requests
	@GetMapping
	public ResponseEntity<List<Recipe>> findAllRecipe() {
		return new ResponseEntity<List<Recipe>>(recipeRepository.findAllRecipe(), HttpStatus.OK);
	}

	@GetMapping(value = "/recipes/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Recipe> findByIdRecipe(@PathVariable int id) {
		return new ResponseEntity<Recipe>(recipeRepository.findByIdRecipe(id), HttpStatus.OK);

	}

	// Post Request

	@PostMapping(value = "/recipe", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	@Transactional(propagation = Propagation.REQUIRES_NEW)
//	@ApiOpertion(value = "Create a new Batch object", nickname = "Create Batch", 
//		code = 201, response = Recipe.class)
//	@ApiResponses(value = {@ApiResponse(code = 201, message = "Created"), 
//			@ApiResponse(code = 400, message = "Invalid Batch")})
	public ResponseEntity<Recipe> create(@Valid @RequestBody Recipe recipe) {
		return new ResponseEntity<Recipe>(service.save(recipe), HttpStatus.CREATED);

	}

	// Put Request

	@PutMapping(value = "/recipe/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Recipe> update(@Valid @RequestBody Recipe recipe, @PathVariable int id) {
		return null;

		// Delete REquest
	}
}