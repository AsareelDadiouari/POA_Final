import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpSentEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Organization} from "../model/organization.interface";
import {environment} from "../../environments/environment";
import {catchError, shareReplay, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  url = environment.backend_url + "/organizations";

  constructor(private http: HttpClient) {
  }

  saveOrganization(organization: Organization): Observable<Organization | HttpEvent<Organization>> {

    return this.http.post<Organization | HttpEvent<Organization>>(this.url, organization)
      .pipe(
        catchError(error => {throw error}),
      );
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.url)
      .pipe(
        catchError(error => {throw error}),
        shareReplay(1)
      );
  }

  getOrganizationById(id: number): Observable<Organization>{
    return this.http.get<Organization>(this.url + "/" + id);
  }
}
