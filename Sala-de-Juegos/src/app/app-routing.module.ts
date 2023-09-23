import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// const routes: Routes = [
//   {
//     //Pantalla generica. Index
//     path: "",
//     redirectTo: "login",
//     pathMatch: 'full',
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'home', 
//     component: HomeComponent,
//     children:[
//       {
//         path: 'quien-soy', 
//         component: QuienSoyComponent
//       }
//     ]
//   },
//   {
//     path: "**",
//     component: NotFoundComponent
//   }
// ];
const routes: Routes = [
  { path: '', 
    component: LoginComponent },
  {
    path:'home',
    component: HomeComponent
  } ,
  // { path: '', 
  //   loadChildren: () => import('./components/login/login.module')
  //     .then(mod => mod.LoginModule) },
  { path: 'home',
    loadChildren: () => import('./components/home/home.module')
      .then(mod => mod.HomeModule) },
  { path: 'quien-soy', 
    loadChildren: () => import('./components/quien-soy/quien-soy.module') 
      .then(mod => mod.QuienSoyModule) },
  { path: '**', 
    component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
