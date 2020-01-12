import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentviewComponent } from './studentview/studentview.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

const routes: Routes = [
    { path:'student/:id' , component:StudentviewComponent},
    { path:'addstudent' , component:AddstudentComponent},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class StudentRoutingModule{

  }