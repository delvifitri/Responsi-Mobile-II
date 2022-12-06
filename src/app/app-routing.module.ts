import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'diary/:id',
    loadChildren: () => import('./diary/diary.module').then( m => m.DiaryPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: 'diary-tambah',
    loadChildren: () => import('./diary-tambah/diary-tambah.module').then( m => m.DiaryTambahPageModule)
  },
  {
    path: 'diary-edit/:id',
    loadChildren: () => import('./diary-edit/diary-edit.module').then( m => m.DiaryEditPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
