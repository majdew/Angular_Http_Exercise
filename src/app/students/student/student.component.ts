import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';
import { StudentObject } from '../StudentObject';

@Component({
  selector: '[app-student]',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() private student :StudentObject;
  @Output() private colorClickEvent : EventEmitter<String>= new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(){
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }

  sendColorHeaderTitle() {
    this.colorClickEvent.emit(this.student.color);
  }

}
