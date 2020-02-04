import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  apiUrl:string = 'https://quotes.rest/qod/'; // url of free quote-api

  constructor(private http: HttpClient) { }

  fetchDailyQuote(): Observable<Object> {
    return this.http.get(this.apiUrl);
  }
}
