import { Component, OnInit } from '@angular/core';
import {MaterialService} from '../material.service'
import { Material } from '../material';

@Component({
  selector: 'app-materialslist',
  templateUrl: './materialslist.component.html',
  styleUrls: ['./materialslist.component.css']
})
export class MaterialslistComponent implements OnInit {
   private materials : Material[] ;


  constructor(private materialService : MaterialService) { 
    this.materials=this.materialService.getMaterials();
  }

  ngOnInit() {
  }

}
