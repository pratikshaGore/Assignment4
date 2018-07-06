import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { OperatingsystemComponent } from './operatingsystem/operatingsystem.component';
import { ProgrammingLanguageComponent } from './programming-language/programming-language.component';

const routes: Routes = [
  {path:'database',component:DatabaseComponent},
  {path:'operatingsystem',component:OperatingsystemComponent},
  {path:'programming-language',component:ProgrammingLanguageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
