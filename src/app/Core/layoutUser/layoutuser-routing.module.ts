import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: '',
      component: ProfileComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'orders',
      component: OrdersComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'profile',
      component: ProfileComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutuserRoutingModule {
}
