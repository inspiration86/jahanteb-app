import {Component, OnInit} from '@angular/core';
import {MainService} from '../../main.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  category: any[] = [];
  pageOfItems: Array<any>;
  items = [];
  countOfProduct: any;
  categoryID: any;

  constructor(private service: MainService,
              private route: ActivatedRoute,
              private router:Router) {
  }

  ngOnInit(): void {

    this.getCategory();

    this.items = Array(this.countOfProduct).fill(0).map((x, i) => ({id: (i), name: `Item ${i}`}));
    this.route.paramMap.subscribe(
      (params) => (this.categoryID = params.get('id'))
    );
    if (this.categoryID === '0') {
      this.getProduct();
    } else {
        this.getAllSubCategory(this.categoryID);
    }
  }
  goPage(id:any){
    this.router.navigate(['home/all-product/'+id]);
    this.getAllSubCategory(id);
  }
  onChangePage(pageOfItems: Array<any>): void {
    this.pageOfItems = pageOfItems;
  }

  getAllSubCategory(id:any) {
    this.service.allProductBySubCategoryID(id).subscribe((response) => {
      if (response['success'] === true) {
        this.products = response['data'];
        this.countOfProduct = this.products.length;

      }
    });
  }

  getProduct() {
    this.service.getAllProduct().subscribe((response) => {
      if (response['success'] === true) {
        this.products = response['data'];
        this.countOfProduct = this.products.length;

      }
    });
  }

  getCategory() {
    this.service.getAllCategory().subscribe((response) => {
      if (response['success'] === true) {
        this.category = response['data'];
      }
    });
  }

}
