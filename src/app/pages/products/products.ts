import { ChangeDetectorRef, Component, Injectable } from '@angular/core';
import { Product } from '../../services/product';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
@Injectable({ providedIn: 'root' })
export class Products {
  products: any[] = [];
  count: number = 1;
  map: Map<number, number> = new Map();

  constructor(
    private productService: Product,
    private cartService: CartService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res.products;
      this.cd.detectChanges();
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product, this.map);
    alert('Added to cart');
  }

  increase(id: number) {
    this.map.set(id, this.map.get(id) ? this.map.get(id)! + 1 : 1);
    this.cd.detectChanges();
  }

  decrease(id: number) {
    this.map.set(id, this.map.get(id) && this.map.get(id)! > 1 ? this.map.get(id)! - 1 : 1);
    this.cd.detectChanges();
  }
}
