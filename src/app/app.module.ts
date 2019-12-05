import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { SliderComponent } from "./slider/slider.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { FooterComponent } from "./footer/footer.component";
import { ModalComponent } from "./modal/modal.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddIngredientsComponent } from "./add-ingredients/add-ingredients.component";
import { AddStepsComponent } from "./add-steps/add-steps.component";
import { ListRecipeComponent } from "./list-recipe/list-recipe.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    AddRecipeComponent,
    FooterComponent,
    ModalComponent,
    AddIngredientsComponent,
    AddStepsComponent,
    ListRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
