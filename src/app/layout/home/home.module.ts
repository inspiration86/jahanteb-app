import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {SharedmoduleModule} from '../../SharedModule/sharedmodule.module';
import {SharedModule} from 'primeng/api';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModules} from '../../shared/shared.module';
import {AllProductsComponent} from './all-products/all-products.component';


@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedmoduleModule,
    SharedModules
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class HomeModule { }
