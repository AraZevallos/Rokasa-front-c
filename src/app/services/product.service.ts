import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  get_products(filter):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/products/'+filter,{headers:headers});
  }

  get_categories():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/categories/',{headers:headers});
  }

  insert_product(data){
    const fd = new FormData();
    fd.append('title',data.title);
    fd.append('sku',data.sku);
    fd.append('description',data.description);
    fd.append('unitSale',data.unitSale);
    fd.append('img',data.img);
    fd.append('purPrice',data.purPrice);
    fd.append('salePrice',data.salePrice);
    fd.append('stock',data.stock);
    fd.append('idcategory',data.idcategory);
    fd.append('points',data.points);

    return this._http.post(this.url + '/product/register',fd)
  }

  get_product(id):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + '/product/'+id,{headers:headers});
  }
}
