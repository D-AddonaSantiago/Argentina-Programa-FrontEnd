import { Component, ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { linksNav } from 'src/app/models/linksNav.model';
import { LinksNavService } from 'src/app/service/links-nav.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-links-nav',
  templateUrl: './links-nav.component.html',
  styleUrls: ['./links-nav.component.css']
})
export class LinksNavComponent {

  linksNav: linksNav[] = [];

  constructor(public linksNavService: LinksNavService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.linksNavService.getLinksNav().subscribe(data => {this.linksNav = data});

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  childModal: any;

  @ViewChild(NgbPopover)
  set modal(directive: NgbPopover) {
    this.childModal = directive;
  };

  linkEditado = {title: '', url: ''};


  actuaizarLista():void{
    setTimeout(() => {
      this.linksNavService.getLinksNav().subscribe(data => {this.linksNav = data});
    }, 200);
  }

  agregarLink(): void {
    const nuevoLink: linksNav = {
      title: 'Nuevo Link',
      url: 'link'
    };
    this.linksNavService.postLinksNav(nuevoLink).subscribe();
    this.actuaizarLista();
  }

  editarLink(link: linksNav) {
    this.linkEditado= link;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.linksNav, event.previousIndex, event.currentIndex);
  }


  guardarLink() {
    const link = this.linkEditado;
    this.linksNavService.editLinksNav(link).subscribe();
    this.actuaizarLista();
  }

  eliminarLink(link: linksNav): void {
    const id = link.id;
    this.linksNavService.deleteLinksNav(id).subscribe();
    this.actuaizarLista();
  }

  openPopover(){
    this.childModal.open();
  }

  cerrarPopover() {
    this.childModal.close();
  }
}
