import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from '../material.service';
import {Material } from '../material'

@Component({
  selector: 'app-materialview',
  templateUrl: './materialview.component.html',
  styleUrls: ['./materialview.component.css']
})
export class MaterialviewComponent implements OnInit {
  private id : Number;
  private material : Material;

  constructor(private actRoute: ActivatedRoute , private materialService : MaterialService) {
    this.id = this.actRoute.snapshot.params.id;
    this.material = this.materialService.getMaterialById(this.id);
  }

  ngOnInit() {
  }
}
