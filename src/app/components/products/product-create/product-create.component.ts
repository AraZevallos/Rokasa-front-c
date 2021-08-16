import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  public product;
  public file: File;
  public imgSelect: String | ArrayBuffer;
  public categories;
  public success_message;
  public error_message;

  constructor(
    private _productService : ProductService,
  ) {
    this.product = new Product('', '', '', '', '', '', 1, 1, 1, '', 1);
  }

  ngOnInit(): void {

    this._productService.get_categories().subscribe(
      response=>{
        this.categories = response.categories;
        console.log(this.categories);
        
      }
    );
  }

  success_alert(){
    this.success_message='';
  }

  error_alert(){
    this.error_message='';
  }

  onSubmit(productForm) {
    if(productForm.valid){
      this._productService.insert_product({
        title: productForm.value.title,
        sku: productForm.value.sku,
        description: productForm.value.description,
        unitSale: productForm.value.unitSale,
        img: this.file,
        purPrice: productForm.value.purPrice,
        salePrice: productForm.value.salePrice,
        stock: productForm.value.stock,
        idcategory: productForm.value.idcategory,
        points: productForm.value.points,
      }).subscribe(
        response => {
          this.success_message = "Se registró el producto correctamente";
          this.product = new Product('', '', '', '', '', '', 1, 1, 1, '', 1);
          this.imgSelect = '../../../../assets/img/default.jpg';
        },
        error => {
        }
      )
    }else{
      this.error_message = "Complete correctamente el formulario";
    }
  }

  imgSelected(event:any) {
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSelect = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
}
