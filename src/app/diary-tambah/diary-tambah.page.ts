import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Http } from '@capacitor-community/http';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-diary-tambah',
  templateUrl: './diary-tambah.page.html',
  styleUrls: ['./diary-tambah.page.scss'],
})
export class DiaryTambahPage implements OnInit {
  isi: any;
  tanggal: any;
  token: any;
  nama: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
    this.token = this.authService.getData('token');
      if (this.token != null) {
        this.nama = this.authService.getData('username');
      } else {
        this.router.navigateByUrl('/login');
      }
  }

  addDiary(){
    let url = this.apiService.apiURL() + "/tambah.php";
    let date = new Date();
    Http.request({
      method: "POST",
      url: url,
      headers: {"Content-Type": "application/json"},
      data: {
        isi: this.isi,
        username: this.nama
      }
    }).then((data) => {
      this.isi = ''
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input Diary',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/');
    }, (error) => {
      console.log(error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input Diary',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
