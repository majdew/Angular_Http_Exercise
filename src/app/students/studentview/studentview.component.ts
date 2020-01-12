import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentObject } from '../StudentObject';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent implements OnInit {
  private id:Number;
  private student :StudentObject;
  private students :StudentObject[];

  constructor(private actRoute: ActivatedRoute , private studentService:StudentService) { }

  ngOnInit() {
   this.id = this.actRoute.snapshot.params.id;
   this.studentService.getObservableStudent()
   .subscribe( data => this.students =data);
   this.student = this.getStudentById(this.id);
  


  }

  getStudentById(id:Number) :StudentObject{
    console.log(this.students.length);
    for(let i = 0 ; i<this.students.length ; i++){
      let student = this.students[i];
      if(student.id == id)
        return this.students[i];  
    }
    return null;
  }
}
