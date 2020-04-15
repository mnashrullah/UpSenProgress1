import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nama = 'Ardita Hardi';
  constructor(private storage: Storage) { }
  simpanData(){
    this.storage.set('nama', this.nama);
  }
  ambilData(){
    this.storage.get('nama').then((hasil) => {
    console.log('nama anda adalah '+hasil)
    })
  }
  ngOnInit() {
  }

}
