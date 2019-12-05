import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ModalComponent } from './modal/modal.component';
import { StepsComponent } from './steps/steps.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    AddRecipeComponent,
    FooterComponent,
    RecipesComponent,
    ModalComponent,
    StepsComponent,
    IngredientsComponent,
    FormsModule,
    HttpClientModule
  ],
  imports: [BrowserModule, AppRoutingModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
