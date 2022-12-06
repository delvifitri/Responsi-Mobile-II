import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiaryTambahPageRoutingModule } from './diary-tambah-routing.module';

import { DiaryTambahPage } from './diary-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiaryTambahPageRoutingModule
  ],
  declarations: [DiaryTambahPage]
})
export class DiaryTambahPageModule {}
