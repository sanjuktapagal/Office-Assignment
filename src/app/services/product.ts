import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>('https://dummyjson.com/products');
  }
}
