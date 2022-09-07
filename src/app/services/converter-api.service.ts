import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConverterApiService {
  constructor(public http: HttpClient) {}

  public converter(from_to : string): Observable <any> {
    let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=464392e29f806452df96`;
    return this.http.get(url).pipe(retry(1));
  }
  
}
