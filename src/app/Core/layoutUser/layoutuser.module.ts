import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutuserRoutingModule } from './layoutuser-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedmoduleModule} from '../../SharedModule/sharedmodule.module';
import { OrdersComponent } from './orders/orders.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OrdersComponent,
    ProfileComponent,
    ContentDashboardComponent
  ],
  imports: [
    CommonModule,
    LayoutuserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedmoduleModule,
    RippleModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LayoutuserModule { }
