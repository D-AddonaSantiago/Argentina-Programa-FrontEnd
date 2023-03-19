import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private modalService: NgbModal) { }

  openPopup() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.id = 'Login';
  }

  logout(){
    console.log('LogOut');
  }
}
