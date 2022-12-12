import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Accountancy } from '../model/accountancy.interface';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {environment} from "../../environments/environment";
import {map, switchMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountancyService {
  url = environment.backend_url + "/accounting";
  public accountanciesSubject: BehaviorSubject<Accountancy[]> = new BehaviorSubject <Accountancy[]>([]);

  constructor(private http: HttpClient) {
    this.getAllAccountancy().subscribe((accountancies) => {
      this.accountanciesSubject.next(accountancies);
    });
  }

  getAllAccountancy(): Observable<Accountancy[]>{
    return this.http.get<Accountancy[]>(this.url).pipe();
  }

  getAccountancyByOrganizationName(name: string): Observable<Accountancy>{
    return this.http.get<Accountancy>(this.url + "/findByOrgName?orgName=" + name).pipe();
  }

  saveAccountancy(accountancy: Accountancy): Observable<Accountancy> {
    return this.http.post<Accountancy>(this.url, accountancy).pipe(
       switchMap( (accountancy) => {
         return this.getAllAccountancy().pipe(
           map((accountancies) => {
             this.accountanciesSubject.next(accountancies);
             return accountancies.find(account => account.id === accountancy.id);
           })
         );
       })
    );
  }
}
