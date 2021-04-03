import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StoreDetailsComponent } from './components/store-details/store-details.component';
import { StoreListComponent } from './components/store-list/store-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StoreListComponent },
  { path: "list", component: StoreListComponent },
  { path: "store/:id", component: StoreDetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
