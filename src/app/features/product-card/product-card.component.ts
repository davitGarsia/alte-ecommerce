import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../core/interfaces";
import {CartService} from "../../core/services";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {} as Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart($event: MouseEvent) {
    $event.stopPropagation();
this.cartService.addToCart({
  productId: this.product.id,
  quantity: 1,
}).subscribe()
  }

}
