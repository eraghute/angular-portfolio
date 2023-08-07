import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { FooterComponent } from './footer/footer.component';
import { ValidatorsComponent } from './validators/validators.component';
import { LoaderComponent } from './loader/loader.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    FooterComponent,
    ValidatorsComponent,
    LoaderComponent,
    PipesComponent,
    RelativeTimePipe,
    PluralizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
