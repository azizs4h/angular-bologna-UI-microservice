import { Component, OnInit } from '@angular/core';
import { getServis } from 'src/app/httpservisleri/get.servis';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-doktora',
  templateUrl: './doktora.component.html',
  styleUrls: ['./doktora.component.css'],
  providers: [getServis]
})
export class DoktoraComponent implements OnInit {
  constructor(public getVeri:getServis) { }

  fakulte = [];
  fakulteBilgisi = {};
  bolumBilgisi = [];

  ngOnInit(): void {
    this.getVeri.getData(globals.apiURL+'/university/type/enstitu_d').subscribe(
      data => this.fakulte = data, 
      error => console.error(error)
    );    
  }

  public getFakulte(url:string,id:string){
    if( this.fakulteBilgisi[id] === undefined ){
      this.getVeri.getData(url).subscribe(
        data => this.setFakulte(data,id), 
        error => console.error(error),
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
        error => console.error(error),
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
