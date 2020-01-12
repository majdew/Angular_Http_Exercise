import { Injectable } from '@angular/core';
import { Material } from './material';


export class MaterialService {
  private materials: Material[]  = [
    new Material(1 , "java" , "3/4/2010"),
    new Material ( 2 , "Android" ,  "3/5/2020")
  ];

  constructor() { }

  getMaterials () : Material []{
    return this.materials;
  }

  getMaterialById(id : Number) : Material {
    for( let i = 0 ; i < this.materials.length ; i++){
      if(this.materials[i].checkMaterialById(id)) 
        return this.materials[i] ; 
    }
    return null;
  }
}
