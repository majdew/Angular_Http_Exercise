import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
  private birthdate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
