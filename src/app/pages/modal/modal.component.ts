import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { getServis } from 'src/app/httpservisleri/get.servis';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() url:string;

  modalData = {"course_category":{}};
  constructor(public activeModal: NgbActiveModal,private veri: getServis) { }

  ngOnInit(): void {
    this.veri.getData(this.url).subscribe(
      data => this.modalData = data,
      error => console.error("hata veri gelmedi",error)
      );
  }
  unsorted(){ return 0; }
  closeModal(){
    this.activeModal.close();
  }
  
}
