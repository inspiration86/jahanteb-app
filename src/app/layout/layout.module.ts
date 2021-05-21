import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {LayoutRoutingModule} from './layout-routing.module';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import {GalleriaModule} from 'primeng/galleria';
import {SharedModule} from 'primeng/api';
import {ProductDetailComponent} from './home/product-detail/product-detail.component';
import {SharedModules} from '../shared/shared.module';
import {NewsDetailComponent} from './news-detail/news-detail.component';

@NgModule({
  declarations: [ProductDetailComponent, NewsDetailComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutRoutingModule,
    SharedmoduleModule,
    GalleriaModule,
    TabViewModule,
    SharedModule,
    SharedModules
  ],
  exports: [GalleriaModule, ProductDetailComponent, NewsDetailComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],

})
export class LayoutModule {
}
