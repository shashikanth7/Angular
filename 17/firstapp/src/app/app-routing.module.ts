import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';

const routes: Routes = [
  {path:'form',component:BottomsheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
