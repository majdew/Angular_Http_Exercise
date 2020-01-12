import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { MaterialviewComponent } from './materialview/materialview.component';

const routes: Routes = [
    { path: 'material/:id' , component:MaterialviewComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class MaterialRoutingModule{

}