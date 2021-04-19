import { Component, OnInit } from '@angular/core';
import { getServis } from 'src/app/httpservisleri/get.servis';
import { globals } from 'src/app/globals';
@Component({
  selector: 'app-yukseklisans',
  templateUrl: './yukseklisans.component.html',
  styleUrls: ['./yukseklisans.component.css'],
  providers: [getServis]
})
export class YukseklisansComponent implements OnInit {
  constructor(public getVeri:getServis) { }

  fakulte = [];
  fakulteBilgisi = {};
  bolumBilgisi = [];

  ngOnInit(): void {
    this.getVeri.getData(globals.apiURL+'/university/type/enstitu_yl').subscribe(
      data => this.fakulte = data, 
      error => console.error(error.status)
    );    
  }

  public getFakulte(url:string,id:string){
    if( this.fakulteBilgisi[id] === undefined ){
      this.getVeri.getData(url).subscribe(
        data => this.setFakulte(data,id), 
        error => console.error(error.status),
      );
    }
  }

  public setFakulte(temp:JSON, id:string){
    if( this.fakulteBilgisi[id] === undefined ){
      this.fakulteBilgisi[id]={};
      this.fakulteBilgisi[id] = temp;
    }
  }
  public loading(id:string){
    if(this.fakulteBilgisi[id] === undefined) return true;
    else{
      return false;
    }
  }

  public getBolum(url:string,id:string){
    if( this.bolumBilgisi[id] === undefined ){
      this.getVeri.getData(url).subscribe(
        data => this.setBolum(data,id), 
        error => console.error(error.status),
      );
    }
  }

  public setBolum(temp:JSON, id:string){
    if( this.bolumBilgisi[id] === undefined ){
      this.bolumBilgisi[id]={};
      this.bolumBilgisi[id] = temp;
      console.log("burası bolum bilgisi moruk"+this.bolumBilgisi[id]);
    }
  }
}

