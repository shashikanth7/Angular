import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';




const routes: Routes = [
  
  {path:"categories",component:CategorysComponent},
  {path: "complaint",component:ComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
