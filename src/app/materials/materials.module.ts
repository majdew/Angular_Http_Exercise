import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialslistComponent } from './materialslist/materialslist.component';
import { MaterialComponent } from './material/material.component';
import { MaterialviewComponent } from './materialview/materialview.component';
import { MaterialRoutingModule } from './materialrouting.module';
import { AppRoutingModule } from '../app-routing.module';
import { TestpipeComponent } from './testpipe/testpipe.component';
import { MypipePipe } from './mypipe.pipe';
import { MaterialService } from './material.service';

@NgModule({
  declarations: [MaterialslistComponent, MaterialComponent, MaterialviewComponent, TestpipeComponent, MypipePipe],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    AppRoutingModule
  ],
  exports: [
    MaterialslistComponent,
    MaterialviewComponent,
    MaterialComponent
  ],
  providers: [MaterialService]
})
export class MaterialsModule { }