import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  // {
  //   path: 'kyc',
  //   loadChildren: () => import('kyc/Module').then((m) => m.KycModule)
  // },
  {
    path: 'kyc',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'kyc',
        exposedModule: './Module'
      })
      .then(m => m.KycModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
