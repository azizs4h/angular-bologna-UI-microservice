import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getServis } from 'src/app/httpservisleri/get.servis';
import { globals } from 'src/app/globals';

@Component({
  selector: 'app-hakkinda',
  templateUrl: './hakkinda.component.html',
  styleUrls: ['./hakkinda.component.css'],
  providers:[getServis]
})
export class HakkindaComponent implements OnInit {
  url = globals.apiURL+"/university/department/";
  id = "";
  genelBilgiler = {
    "department_name": "",
    "links":[]
  };
  hakkinda = {};
  constructor(private actRoute: ActivatedRoute,private getVeri : getServis) {}

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.url += this.id; 
    this.getVeri.getData(this.url).subscribe(
      data => this.setGenelBilgi(data), 
      error => console.error(error)
    );
    
  }
  setGenelBilgi(data:any){
    this.genelBilgiler = data; 
    if(this.genelBilgiler !== undefined){
      this.getHakkinda(this.genelBilgiler.links[1].href);
    }
  }
  unsorted() { return 0; }

  getHakkinda(url:string){
    if(this.hakkinda !== undefined){
      this.getVeri.getData(url).subscribe(
        data => this.setHakkinda(data), 
        error => console.error(error)
      );
    }
  }
  setHakkinda(data:any){
      this.hakkinda = data;
  }
  urlKontrol (){
    if (this.genelBilgiler !== undefined && this.genelBilgiler.links[0].href !== undefined) {
      return true;
    }
    return false;
  }
}