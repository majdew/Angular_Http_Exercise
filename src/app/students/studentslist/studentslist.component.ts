import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentObject } from '../StudentObject';

@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.component.html',
  styleUrls: ['./studentslist.component.css']
})
export class StudentslistComponent implements OnInit {
  private students : StudentObject[]  =[] ;
  private fontcolor : String = "";
 
  constructor( private studentService : StudentService) {};

  ngOnInit() {
     this.studentService.getObservableStudent()
    .subscribe(data => this.students =data);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }

  insertStudentIntoList(student){
    this.studentService.insertStudentIntoServiceList(student);
  }
}
