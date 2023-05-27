import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './shared/components/features/features.component';
import { AboutComponent } from './shared/components/about/about.component';
import { PricingComponent } from './shared/components/pricing/pricing.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent
  },
  {
    path: 'features', component: FeaturesComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'pricing', component: PricingComponent
  },
  {
    path: 'reviews', component: ReviewsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'page-not-found', component: PageNotFoundComponent
  },
  {
    path: '**', redirectTo: 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
