import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../core/services/products.service";
import {Product} from "../../core/interfaces";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  sub$ = new Subject();

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts({})
      .pipe(takeUntil(this.sub$)).subscribe(
      (products) => {
        this.products = products;
      }
    )
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }

}
