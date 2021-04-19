import { Component, OnInit, Input } from '@angular/core';
import { getServis } from 'src/app/httpservisleri/get.servis';

@Component({
  selector: 'app-programciktisi',
  templateUrl: './programciktisi.component.html',
  styleUrls: ['./programciktisi.component.css']
})
export class ProgramciktisiComponent implements OnInit {
  @Input() url:string;
  constructor(private getVeri: getServis) { }
  pc={};
  ngOnInit(): void {
    this.getVeri.getData(this.url).subscribe(
      data => this.pc = data, 
      error => console.error(error),
    );
  }

}
