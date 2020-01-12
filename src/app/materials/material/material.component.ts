import { Component, OnInit, Input } from '@angular/core';
import { Material } from '../material';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  @Input() private material : Material;

  constructor() {
   
   }

  ngOnInit() {
  }

}
