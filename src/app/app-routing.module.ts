import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/main-layout/main-layout.component';
//import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'auth',
        //component: AuthComponent,
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'cart',

        loadChildren: () =>
          import('./pages/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'orders',

        loadChildren: () =>
          import('./pages/orders/orders.module').then((m) => m.OrdersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
