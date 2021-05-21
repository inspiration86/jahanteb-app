import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AllProductsComponent} from './all-products/all-products.component';
import {NewsDetailComponent} from '../news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'news-detail/:id',
    component: NewsDetailComponent
  },
  {
    path: 'all-product/:id',
    component: AllProductsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
