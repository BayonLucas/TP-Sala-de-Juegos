import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { 
    path: 'login', 
    loadChildren: () => import('./components/login/login.module')
      .then(mod => mod.LoginModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./components/register/register.module')
      .then(mod => mod.RegisterModule) 
  },
  { 
    path: 'home',
    loadChildren: () => import('./components/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'quien-soy',
    loadChildren: () => import('./components/quien-soy/quien-soy.module')
      .then(mod => mod.QuienSoyModule)
  },
  { 
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
