import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  nama: any; //init variable nama untuk namauser
  token: any;
  id: any;
  tanggal: any;
  isi: any;
  diary: any[] = [];
  constructor(
    private authService: AuthenticationService,
    private apiService: ApiService,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController) {
      this.loadToken();
      this.getDiary();
    }
    ngOnInit() {
    }
    //ceksesi untuk mengambil nama user
    loadToken() {
      this.token = this.authService.getData('token');
      if (this.token != null) {
        this.nama = this.authService.getData('username');
      } else {
        this.router.navigateByUrl('/login');
      }
    }
    //membuat fungsi logout
    logout() {
      this.authService.logout(); // lempar ke authService lalu cari fungsi logout
      this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
    }

    getDiary() {
      console.log(this.nama);
      this.apiService.listDiary(this.nama).subscribe((res: any) => {
        console.log("sukses", res);
        this.diary = res;
      }, (error:any) => {
        console.log("gagal", error);
        this.alertController.create({
          header : 'Notifikasi',
          message : 'Gagal Memuat Data Diary',
          buttons : ['OK']
        }).then(res => {
          res.present();
        })
      });
    }

    deleteDiary(id: any){
      this.alertController.create({
        header : 'Perhatian',
        subHeader : 'Yakin Menghapus Data Ini?',
        buttons : [
          {
            text : 'Batal',
            handler : (data: any)=>{
              console.log('dibatalkan', data);
            }
          },
          {
            text : 'Yakin',
            handler : (data: any)=>{
              this.apiService.deleteDiary(id).subscribe((res: any) => {
                console.log("sukses", res);
                this.getDiary();
              }, (error: any)=>{
                console.log("error", error);
                this.alertController.create({
                  header : 'Notifikasi',
                  message : 'Gagal Memuat Data Siswa',
                  buttons : ['OK']
                }).then(res => {
                  res.present();
                })
              })
            }
          }
        ]
      }).then(res=>{
        res.present();
      })
    }
}
