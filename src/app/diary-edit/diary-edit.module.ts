import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryEditPageRoutingModule } from './diary-edit-routing.module';

import { DiaryEditPage } from './diary-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryEditPageRoutingModule
  ],
  declarations: [DiaryEditPage]
})
export class DiaryEditPageModule {}
