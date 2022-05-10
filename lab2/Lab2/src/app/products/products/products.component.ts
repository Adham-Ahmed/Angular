
import { Component, OnInit } from '@angular/core';
import { Products } from '../../model/products';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsArr:Products[]=[];

  constructor() {
    let date=new Date();
    this.productsArr = [
      new Products("image0.jpg","product0","a0",date,10,2),
      new Products("image1.jpg","product1","a1",date,30,3),
      new Products("image2.jpg","product2","a2",date,20,5),
      new Products("image3.jpg","product3","a3",date,60,4),
    ];
   }

  ngOnInit(): void {
  }

}
