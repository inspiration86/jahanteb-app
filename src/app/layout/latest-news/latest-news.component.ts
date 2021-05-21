import { Component, OnInit } from '@angular/core';
import {MainService} from '../main.service';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  latestNews: any[] = [];
  displayBasic: boolean;
  isLogged: boolean;
  displayNotNews:boolean=false;

  constructor(private service: MainService,
    public localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.isLogged = this.localStorage.getCurrentUser();
    this.service.getLatestNews().subscribe((response) => {
      if (response['success'] === true) {
        this.latestNews = response['data'];
      }
    });
  }

}
