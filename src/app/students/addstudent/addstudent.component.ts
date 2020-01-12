import { Component, OnInit , EventEmitter , Output } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  private profileForm = new FormGroup({
    name : new FormControl(null, [Validators.required ,Validators.minLength(4)]),
    major : new FormControl(null,[Validators.required]),
    color : new FormControl('')
  });
  private student :Student;
  @Output()  private newStudentEvent :EventEmitter <Student> = new EventEmitter();
  private submitted = false;
  private static COUNT = 1;

  constructor() { }

  ngOnInit() {
  }

  get control() {
    return this.profileForm.controls;
  }

  saveStudent(){
    this.submitted = true;
    if(!this.profileForm.invalid){
    let name = this.profileForm.value.name;
    let major = this.profileForm.value.major;
    let color = this.profileForm.value.color;
    this.student= new Student(AddstudentComponent.COUNT++ , name , major , color);
    this.newStudentEvent.emit(this.student);
    this.submitted = false;
    this.reset();
    }
  }

  reset(){
    this.submitted = false;
    this.profileForm.reset();
  }

}
