import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Accountancy } from 'src/app/model/accountancy.interface';
import { AccountancyService } from 'src/app/service/accountancy.service';

@Component({
  selector: 'app-accountancy',
  templateUrl: './accountancy.component.html',
  styleUrls: ['./accountancy.component.css']
})
export class AccountancyComponent implements OnInit, OnDestroy {
  accountancies: Accountancy[]
  subscription: Subscription;

  constructor(private accountancyService: AccountancyService) {
  }

  ngOnInit(): void {
   this.subscription = this.accountancyService.accountanciesSubject.subscribe(accountancies => {
      this.accountancies = accountancies
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
