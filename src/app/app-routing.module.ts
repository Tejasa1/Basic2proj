import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { InsertComponent } from './insert/insert.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {path:"display", component:DisplayComponent},
  {path:"insert", component:InsertComponent},
  {path:"search", component:SearchComponent},
  {path:"delete", component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
