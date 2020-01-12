import { Injectable } from '@angular/core';
import { Student } from './student';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable , throwError, from} from 'rxjs';
import { retry , catchError , map , tap} from "rxjs/operators";
import { StudentObject } from './StudentObject';

@Injectable ()
export class StudentService {

  private baseurl ='http://localhost:3000/students';
  private students ;

  constructor(private http : HttpClient){
  }

   ngOnInit(){
     this.getObservableStudent()
     .subscribe(data => this.students =data);

   }

   httpOptions = {
     headers : new HttpHeaders({
       'content-Type' :'application/json'
     })
   }


   getObservableStudent() : Observable<StudentObject[]>{
    return this.http.get<StudentObject[]>(this.baseurl);
   }

   getStudents(){
     return this.students;

   }


  insertStudentIntoServiceList(student:Student):void {
    this.students.push(student);
  }
}


