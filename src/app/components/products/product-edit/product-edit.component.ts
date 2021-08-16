import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public product;
  public id;

  constructor(
    private _route : ActivatedRoute,
    private _productService : ProductService,
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe(params=>{
      this.id=params['id'];
      this._productService.get_product(this.id).subscribe(
        response =>{
          this.product = response.product;
          console.log(this.product);
          
        },
        error =>{}
      )
    })
  }

}
