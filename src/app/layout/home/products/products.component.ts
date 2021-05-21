import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {MainService} from '../../main.service';
// import {MessageService} from 'primeng/api';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  customOptions: OwlOptions = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<i class="fa fa-chevron-left fa-2x"></i>', '<i class="fa fa-chevron-right fa-2x"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items:5
      }
    }
  };

  newestProduct: any[] = [];
  displayBasic: boolean;
  isLogged: boolean;
  displayNotProduct:boolean=false;

  constructor(private service: MainService,
    // private messageService: MessageService,
    public localStorage: LocalStorageService) {}

  ngOnInit(): void {

    this.isLogged = this.localStorage.getCurrentUser();
    this.service.getNewestProduct().subscribe((response) => {
      if (response['success'] === true) {
        this.newestProduct = response['data'];
      }
    });
  }

}
