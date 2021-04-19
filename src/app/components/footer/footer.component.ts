import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

export class FooterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  unsorted() { return 0; }//bunu silme, bu keyvalue için gerekli
  copyright = "Konya Teknik Üniversitesi 2020";
  iletisim = {
    "Rektörlük":{"Telefon": "0(332) 350 85 85 ","Fax": "0(332) 354 00 12"},
    "Mühendislik Ve Doğa Bilimleri Fakültesi":{"Telefon": "0(332) 205 15 00","Fax": "0(332) 241 06 35"},
    "Mimarlık Ve Tasarım Fakültesi":{"Telefon": "0(332) 205 14 09","Fax": "0(332) 241 23 00"},
    "Teknik Bilimler Meslek Yüksekokulu": {"Telefon": "0(332) 241 01 12"}
  }
  adres = {
    "Rektörlük / Mimarlık ve Tasarım Fakültesi":"Akademi Mah. Yeni İstanbul Cad. No:235/1 Selçuklu/KONYA",
    "Mühendislik ve Doğa Bilimleri Fakültesi / Teknik Bilimler Meslek Yüksekokulu Lisansüstü Eğitim Enstitüsü":"Ardıçlı Mah. Rauf Orbay Cad. 42250, Selçuklu/KONYA",
    "Kep Adresi" : "konyateknikuniversitesi@hs01.kep.tr",
  }
}