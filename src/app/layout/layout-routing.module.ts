import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent} from './home/product-detail/product-detail.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {ContactComponent} from './contact/contact.component';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: 'news-detail/:id',
    component: NewsDetailComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'news', component: NewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
