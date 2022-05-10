import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from '../products/products/products.component'
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule
    
  ],
  exports: [
    ProductsComponent
    

  ]
})
export class ProductsModuleModule { }
