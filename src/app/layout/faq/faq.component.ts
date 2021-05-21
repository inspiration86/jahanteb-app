import {Component, OnInit} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq: any[] = [];

  constructor(private service: MainService) {
  }

  ngOnInit(): void {
    this.service.getAllFaq().subscribe((response) => {
      if (response['success'] === true) {
        this.faq = response['data'];
      }
    });
  }

}
