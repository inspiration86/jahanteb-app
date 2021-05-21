import { AdminService } from './../../admin.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.scss'],
  providers: [
    MessageService, ConfirmationService
  ]
})
export class ProductDetailsDialogComponent implements OnInit {

  comments: any[];
  categories: any[] = [];
  subCategories: any[] = [];
  discounts: any[] = [];
  featureValues: any[] = [];
  product: any;
  keywords: string;
  selectedCat: any;
  selectedSub: any;
  selectedDiscount: any;

  constructor(
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.product = this.config.data.product;
    if(this.product.keywords != ''){
      this.keywords = this.product.keywords.split(',');
    }
    this.getCategories();
    this.getDiscounts();
    this.getComments();

    for (let i = 0; i < this.product.features.length; i++) {
      this.featureValues.push({
        feature: this.product.features[i],
        value: this.product.featuresValue[i],
      });
    }

  }

  getComments(): any{
    this.service.getAllComments().subscribe((response) => {
      if (response.success === true) {
        this.comments = response.data.filter(x=>x.productID == this.product._id);
      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((response) => {
      if (response.success === true) {
        this.categories = response.data;

        this.subCategories = response.data.filter(
          (x) => x._id === this.product.categoryID
        )[0].SubCategory;
        this.selectedCat = response.data.filter(
          (x) => x._id === this.product.categoryID
        )[0];

        this.selectedSub = this.subCategories.filter(
          (x) => x._id === this.product.subCategoryID
        )[0];

      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response.data,
        });
      }
    });
  }

  getDiscounts(): any {
    this.service.getAllDiscounts().subscribe((response) => {
      if (response.success === true) {
        this.discounts = response.data;
        this.selectedDiscount = this.discounts.filter(
          (x) => x._id === this.product.discountID
        )[0];
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response.data,
        });
      }
    });
  }

  deleteProduct(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteProduct(id).subscribe((response) => {
          if (response.success === true) {
            // close
            this.ref.close(true);
          } else {
            this.messageService.add({severity: 'error', summary: ' حذف اطلاعات ', detail: response.data});
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }

  return():void{
    // close
    this.ref.close();
  }

  activeComment(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از فعالسازی دیدگاه انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // active comment
        this.service.activeOrDeactiveComment(id, {active: true}).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' فعالسازی دیدگاه ', detail: response.data});
            this.getComments();
          } else {
            this.messageService.add({severity: 'error', summary: ' فعالسازی دیدگاه ', detail: response.data});
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }

  deactiveComment(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از غیرفعالساری دیدگاه انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // deactive comment
        this.service.activeOrDeactiveComment(id, {active: false}).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' غیرفعالساری دیدگاه ', detail: response.data});
            this.getComments();
          } else {
            this.messageService.add({severity: 'error', summary: ' غیرفعالساری دیدگاه ', detail: response.data});
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }

  deleteComment(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteComment(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getComments();
          } else {
            this.messageService.add({severity: 'error', summary: ' حذف اطلاعات ', detail: response.data});
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }
}
