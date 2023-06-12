import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SunburstComponent } from './components/sunburst/sunburst.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomepageComponent
  },
  {
    path: 'explore', component: ExploreComponent
  },
  {
    path: 'dashboard', component: SunburstComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
