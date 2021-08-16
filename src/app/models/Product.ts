export class Product{
    constructor(
      public _id: string,
      public title: string,
      public sku: string,
      public description: string,
      public unitSale: string,
      public img: string,
      public purPrice: number,
      public salePrice: number,
      public stock: number,
      public idcategory: string,
      public points: number,
    ){}
  }