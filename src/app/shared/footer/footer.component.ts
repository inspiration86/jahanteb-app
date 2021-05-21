import { Component, OnInit } from '@angular/core';
import {MainService} from '../../layout/main.service';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  category: any[] = [];
  displayBasic: boolean;

  constructor(private service: MainService,
    public localStorage: LocalStorageService) {}

    ngOnInit(): void {

    this.service.getAllCategory().subscribe((response) => {
      if (response['success'] === true) {
        this.category = response['data'];
      }
    });

  }
}
