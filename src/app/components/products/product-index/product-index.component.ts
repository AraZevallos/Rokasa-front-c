import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  public products;
  public url;
  public filter;

  constructor(
    private _productService : ProductService,
  ) {
    this.url= GLOBAL.url;
  }

  ngOnInit(): void {
    this._productService.get_products('').subscribe(
      response =>{
        this.products = response.products;
        console.log(this.products);
      },
      error=>{

      }
    );
  }

  search(searchForm){
    this._productService.get_products(searchForm.value.filter).subscribe(
      response => {
        this.products = response.products;
      },
      error=>{}
    )
  }

}
