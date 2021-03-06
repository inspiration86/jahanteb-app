import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {SharedmoduleModule} from '../SharedModule/sharedmodule.module';
import {PrimengComponentModule} from '../SharedModule/primeng-component.module';
import {NgxSpinnerModule} from 'ngx-spinner';


@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedmoduleModule,
    PrimengComponentModule,
    NgxSpinnerModule
  ],
  exports: [FooterComponent, HeaderComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
})
export class SharedModules {
}
