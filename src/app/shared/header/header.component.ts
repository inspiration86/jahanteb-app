import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import set = Reflect.set;
import {MainService} from '../../layout/main.service';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayBasic: boolean;
  items: MenuItem[];
  displayMobileMenu = false;
  itemsPc: MegaMenuItem[] = [];
  category: any[] = [];
  menuCategories: MenuItem[] = [];


  constructor(private viewportScroller: ViewportScroller,
              private route: Router,
              private service: MainService,
              public localStorage: LocalStorageService,
              private router: Router,
              private spinner: NgxSpinnerService) {
  }


  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);

    if (this.displayMobileMenu === true) {
      this.displayMobileMenu = false;
    }
  }

  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }
  goProduct(categoryId: any): any {
    console.log(categoryId);
    this.router.navigateByUrl('/home/all-product/' + categoryId);

  }
  ngOnInit(): void {
    this.spinner.show();
    const subList: MenuItem[] = [];
    let subCategory: MenuItem[] = [];
    const subListPC: MenuItem[] = [];
    this.service.getAllCategory().subscribe((response) => {
      if (response.success === true) {
        const result = response['data'];
        for (var i = 0; i < result.length; i++) {
          if (result[i]['SubCategory'].length > 0) {
            subCategory.push(
              {
                label: 'همه',
                command: event => this.router.navigate(['/home/all-product/'+0])
              });
            const resultSubCategory = result[i]['SubCategory'];

            for (var j = 0; j < resultSubCategory.length; j++) {
              const id=resultSubCategory[j]._id
              subCategory.push(
                {
                  label: resultSubCategory[j]['title'],
                  command: event => this.goProduct(id),
                });
            }
          }
          // product-detail
          subList.push({
            label: result[i]['title'], items: subCategory,
            command: event => this.goProduct(result[i]),
          });
          // @ts-ignore
          subListPC.push([{
            label: result[i]['title'], items: subCategory,
            command: event => this.goProduct(result[i]['_id']),
          }]);
          subCategory = [];
        }
      }
      this.items = [
        {
          label: 'صفحه اصلی',
          icon: 'pi pi-pw pi-home',
          command: event => this.route.navigate(['/'])
        },
        {
          label: 'محصولات',
          icon: 'pi pi-fw pi-list',
          items: subList
        },
        {
          label: 'سوالات متداول',
          icon: 'pi pi-fw pi-question-circle',
          command: event => this.route.navigate(['/faq'])
        },
        {
          label: 'اخبار',
          icon: 'pi pi-fw pi-tags',
          command: event => this.route.navigate(['/news'])
        },
        {
          label: 'کاتالوگ',
          icon: 'pi pi-fw pi-file-pdf',
          command: event => this.route.navigate(['/'])
        },
        {
          label: 'درباره ما',
          icon: 'pi pi-fw pi-info-circle',
          command: event => this.route.navigate(['/about'])
        },
        {
          label: 'تماس با ما',
          icon: 'pi pi-fw pi-phone',
          command: event => this.route.navigate(['/contact'])
        }
      ];


      // @ts-ignore
      // @ts-ignore
      this.itemsPc = [
        {
          label: 'صفحه اصلی', icon: 'pi pi-fw pi-home',
          command: event => this.route.navigate(['/']),
        },
        {

          label: 'محصولات', icon: 'pi pi-fw pi-list',
        //  items: subListPC,
          styleClass: 'product'
        },
        {
          label: 'سوالات متداول', icon: 'pi pi-fw pi-question-circle',
          command: event => this.route.navigate(['/faq'])
        },
        {
          label: 'اخبار', icon: 'pi pi-fw pi-tags',
          command: event => this.route.navigate(['/news'])
        },
        {
          label: 'درباره ما', icon: 'pi pi-fw pi-info-circle',
          command: event => this.route.navigate(['/about'])
        },
        {
          label: 'تماس با ما', icon: 'pi pi-fw pi-phone',
          command: event => this.route.navigate(['./contact'])
        },
      ];

      this.spinner.hide();
    });


    var header = document.getElementById('header');
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    }

    window.onscroll = function() {
      myFunction();
    };
  }
  goPanel(){
    if(this.localStorage.getCurrentUser()===true){
      this.router.navigate(['user/panel']);
    }
    else {
      this.router.navigate(['/register']);
    }
  }
}
