import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {MainService} from '../../main.service';
import {LocalStorageService} from '../../../Auth/localStorageLogin/local-storage.service';
import {ActivatedRoute} from '@angular/router';
import * as moment from 'jalali-moment';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [MessageService]
})
export class ProductDetailComponent implements OnInit {
  customOptions: OwlOptions = {
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
    navText: [
      '<i class="fa fa-chevron-left fa-2x"></i>',
      '<i class="fa fa-chevron-right fa-2x"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 4,
      },
    },
  };
  responsiveOptions: any[] = [
    {
      breakpoint: '1600px',
      numVisible: 3,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  images: any[] = [];
  featuresValues: any[] = [];
  product: any;
  displayBasic: boolean;
  isLogged: boolean;
  productID: string;
  count: number = 1;
  public date = moment(Date.now()).locale('fa').format('YYYY/M/D');
  public time = moment(Date.now()).locale('fa').format('HH:mm:ss');
  formOrder: FormGroup;
  formComment:FormGroup;
  commentText:string;
  constructor(
    private service: MainService,
    public localStorage: LocalStorageService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.isLogged = this.localStorage.getCurrentUser();
    this.route.paramMap.subscribe(
      (params) => (this.productID = params.get('id'))
    );
    this.service.getProduct(this.productID).subscribe((response) => {
      if (response.success === true) {
        this.product = response.data[0];
        console.log(this.product);
        if (this.product.features.length > 0) {
          for (let index = 0; index < this.product.features.length; index++) {
            this.featuresValues.push({
              feature: this.product.features[index],
              value: this.product.featuresValue[index],
            });
          }
          if (this.product.image != null) {
            this.images.push({
              image: this.product.image,
              thumbnailImageSrc: this.product.image,
              previewImageSrc: this.product.image,
            });
          }
          if (this.product.gallery.length > 0) {
            this.product.gallery.forEach((item) => {
              this.images.push({
                image: item,
                thumbnailImageSrc: item,
                previewImageSrc: item,
              });
            });
          }
        }
      }
    });
    this.createform();
  }

  createform(): void {
    this.formOrder = this.formBuilder.group({
      userID: new FormControl(this.localStorage.userJson['id'], [Validators.required]),
      productID: new FormControl(this.productID, [Validators.required]),
      date: new FormControl(this.date, [Validators.required]),
      count: new FormControl(this.count, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      discountCode:new FormControl(null, ),
    });
    this.formComment = this.formBuilder.group({
      userID: new FormControl(this.localStorage.userJson['id'], [Validators.required]),
      productID: new FormControl(this.productID, [Validators.required]),
      commentText: new FormControl(null, [Validators.required]),

    });
  }
  registerComment(){
    this.service.registerComment(this.formComment.value).subscribe((response)=>{
      if(response['success']===true){
        this.ngOnInit();
        this.messageService.add({severity: 'success', summary: 'موفق', detail: response['data']});
      }
    })
  }
  registerOrder() {
    this.service.registerOrder(this.formOrder.value).subscribe((response) => {
      if (response.success === true) {
        this.messageService.add({severity: 'success', summary: 'موفق', detail: response['data']});

      }
    });
  }
}
