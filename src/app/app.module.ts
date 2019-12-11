import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddIngredientsComponent } from './add-ingredients/add-ingredients.component';
import { AddStepsComponent } from './add-steps/add-steps.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FlipBookComponent } from './flip-book/flip-book.component';


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
    ListRecipeComponent,
<<<<<<< HEAD
    FlipBookComponent
  ],
=======
   ],
>>>>>>> fea955026fdc6ccc1d2ac9484483c5716d791fe2
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
