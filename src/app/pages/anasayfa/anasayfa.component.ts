import { Component, OnInit } from '@angular/core';
import { getServis } from 'src/app/httpservisleri/get.servis';
import { globals } from 'src/app/globals';
import hostname from './hostname.json';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css'],
  providers: [getServis]
})
export class AnasayfaComponent implements OnInit {
  constructor(public getVeri: getServis){}
  messages = [];
  data = {};

  ngOnInit(): void {
    this.getVeri.getData(globals.apiURL+'/').subscribe(
      data => this.messages=data,
      error => console.error(error)
      );
    console.log("host id => "+hostname.id);
  }
  getInfo(url:string,id:string){
    if(this.data[id] === undefined){
      this.getVeri.getData(url).subscribe(
        data => this.setInfo(data,id),
        error => console.error(error)
        );
    }
  }
  setInfo(temp:any,id:string){
    if( this.data[id] === undefined ){
      this.data[id]={};
      this.data[id] = temp;
    }
  }

  loading(id:string){
    //console.log(this.data[id]);
    if(this.data[id] === undefined) return true;
    else{
      return false;
    }
  }
}
