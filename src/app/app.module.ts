import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { AboutComponent } from './shared/components/about/about.component';
import { PricingComponent } from './shared/components/pricing/pricing.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HeadingComponent } from './shared/components/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturesComponent,
    AboutComponent,
    PricingComponent,
    ReviewsComponent,
    ContactComponent,
    PageNotFoundComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
