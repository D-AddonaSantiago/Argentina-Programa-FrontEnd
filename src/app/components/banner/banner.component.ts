import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{

  constructor(public tokenService: TokenService) {}

  isLogged = false;
  bannerLink: string = "https://firebasestorage.googleapis.com/v0/b/sdfrontend.appspot.com/o/banner1.png?alt=media&token=68ec0143-8701-4906-9d90-1815780e6812";

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

}
