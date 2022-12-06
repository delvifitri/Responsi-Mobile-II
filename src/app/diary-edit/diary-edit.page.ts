import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-diary-edit',
  templateUrl: './diary-edit.page.html',
  styleUrls: ['./diary-edit.page.scss'],
})
export class DiaryEditPage implements OnInit {
  id: any;
  isi: any;
  tanggal: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.ambilDiary(this.id);
    })
  }

  ngOnInit() {
  }

  ambilDiary(id:any) {
    this.apiService.viewDiary(id).subscribe((res:any)=> {
      console.log('success', res);
      let diary = res;
      this.isi = diary.isi;
    },(error:any)=>{
      console.log('error', error);
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Ambil Data',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }

  editDiary(){
    let url = this.apiService.apiURL()+"/edit.php?id="+this.id;
    Http.request({
      method : "POST",
      url : url,
      headers : {"Content-Type" : "application/json"},
      data : {
        isi: this.isi
      },
    }).then((data: any)=>{
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Berhasil Edit Diary',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
      this.router.navigateByUrl('/home');
    },(err)=>{
      console.log(err);
      this.alertController.create({
        header : 'Notifikasi',
        message : 'Gagal Edit Diary',
        buttons : ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }

}
