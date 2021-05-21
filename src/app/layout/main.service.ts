import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {
  }


  //#region category
  getAllCategory(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllCategory');
  }

  allProductBySubCategoryID(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/allProductBySubCategoryID/' + id);
  }

//#endregion

  ////#region news
  getAllNews(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllNews');
  }

  getLatestNews(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getLatestNews');
  }

  getNews(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getNews/' + id);
  }

  getAllTagNews(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllTagNews');
  }

  ////#endregion


  //#region products
  //discount product
  getDiscountProduct(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/discountProduct');
  }

  //newest product
  getNewestProduct(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/newestProduct');
  }

// product detail
  getProduct(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getProduct/' + id);
  }

  getAllProduct(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllProduct');
  }

//#endregion


//#region comment
  allCommentForProduct(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/allCommentForProduct/' + id);
  }

  countComment(id: any): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/countComment/' + id);
  }

  registerComment(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerComment', data);
  }

//#endregion


//#region order
  registerOrder(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerOrder', data);
  }

//#endregion


  //#region subscription
  addSmsSubscription(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/addSmsSubscription', data);
  }

  addEmailSubscription(data: any): any {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/addEmailSubscription', data);
  }

  //#endregion
  getAllFaq(): any {
    return this.http.get('http://api.jahantebkhoram.ir/api/v1/user/getAllFaq');
  }

  postContactUs(data: any) {
    return this.http.post('http://api.jahantebkhoram.ir/api/v1/user/registerContactUs', data);
  }
}
