import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentslistComponent } from './students/studentslist/studentslist.component';
import { MaterialslistComponent } from './materials/materialslist/materialslist.component';
import { TestpipeComponent } from './materials/testpipe/testpipe.component';

const routes: Routes = [
  { path:'studentslist' , component: StudentslistComponent},
  { path:'materialslist' , component: MaterialslistComponent},
  { path:'testpipe' , component: TestpipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
