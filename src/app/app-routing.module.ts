import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ModulesModule } from './modules/modules.module';



const routes: Routes = [
  // { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './modules/modules.module#ModulesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
