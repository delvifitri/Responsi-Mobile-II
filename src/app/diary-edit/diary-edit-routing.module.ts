import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiaryEditPage } from './diary-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DiaryEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiaryEditPageRoutingModule {}
