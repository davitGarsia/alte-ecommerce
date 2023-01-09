import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services';
import { Category, Product } from '../../core/interfaces';
import { CategoryService } from '../../core/services/category.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categoryId?: number;

  categories$: Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.categoryId = params['category'];
      this.getProducts();
    });
  }

  getProducts() {
    const params = {
      categoryId: this.categoryId,
    };
    this.productsService
      .getProducts(params)
      .pipe()
      .subscribe((res) => {
        this.products = res;
      });
  }
}
