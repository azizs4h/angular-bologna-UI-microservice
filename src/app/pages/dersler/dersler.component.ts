import { Component, OnInit, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { getServis } from 'src/app/httpservisleri/get.servis';

@Component({
  selector: 'app-dersler',
  templateUrl: './dersler.component.html',
  styleUrls: ['./dersler.component.css'],
  providers:[getServis]
})
export class DerslerComponent implements OnInit {
  constructor(private modalService: NgbModal,private getVeri: getServis) {}
  @Input() dersUrl :string;
  dersler = [

  ];
  ngOnInit(): void {
    //console.log(this.dersUrl);
    this.getVeri.getData(this.dersUrl).subscribe(
      data => this.dersler = data, 
      error => console.error(error),
    );
  }

  open(url:string){
    const modal = this.modalService.open(ModalComponent,{
      size:'xl'
    });
    modal.componentInstance.url = url;
  }
}
