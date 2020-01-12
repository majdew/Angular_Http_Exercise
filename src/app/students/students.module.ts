import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentslistComponent } from './studentslist/studentslist.component';
import { StudentComponent } from './student/student.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './studentrouting.module';
import { StudentService } from './student.service';

@NgModule({
  declarations: [StudentslistComponent, StudentComponent, StudentviewComponent, AddstudentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StudentRoutingModule
  ],
  exports: [
    StudentComponent,
    StudentslistComponent,
    StudentviewComponent
  ],
  providers: [StudentService]
})
export class StudentsModule { }
