import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  latestNews: any[] = [];
  AllNews: any[] = [];
  displayBasic: boolean;
  isLogged: boolean;
  displayNotNews:boolean=false;
  Alltags: any[] = [];
  constructor(private service: MainService,
    public localStorage: LocalStorageService) {}
    ngOnInit(): void {
    this.isLogged = this.localStorage.getCurrentUser();
    this.service.getLatestNews().subscribe((response) => {
      if (response['success'] === true) {
        this.latestNews = response['data'];
      }
    });

    this.service.getAllNews().subscribe((response) => {
      if (response['success'] === true) {
        this.AllNews = response['data'];

      }
    });

    this.service.getAllTagNews().subscribe((response) => {
      if (response['success'] === true) {
        this.Alltags = response['data'];
      }
    });
}

}
