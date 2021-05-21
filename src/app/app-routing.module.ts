import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserGuard} from './Auth/Guard/user.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./Core/layoutAdmin/layoutadmin.module').then(m => m.LayoutadminModule)
  },


  {
    path: 'register',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)

  },
  {
    path: 'user/panel',
    loadChildren: () => import('./Core/layoutUser/layoutuser.module').then(m => m.LayoutuserModule),
    canActivate:[UserGuard]
  },

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
