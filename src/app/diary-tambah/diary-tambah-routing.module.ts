import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryTambahPage } from './diary-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryTambahPageRoutingModule {}
