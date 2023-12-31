import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'resume', component: ResumeComponent },
  // { path: 'portfolio', component: PortfolioComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
