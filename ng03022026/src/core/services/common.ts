import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {
  apiUrl = 'https://jsonplaceholder.typicode.com/';
  http = inject(HttpClient);
  Observable = from([10, 20, 30]);
  
  constructor() {
    console.log('Common service created');
  }

  getUsersPromise(): Promise<object | undefined> {
    return this.http.get(this.apiUrl + 'users').toPromise();
  }
  getUsersObs(): Observable<any> {
    return this.http.get(this.apiUrl + 'users');
  }
  emailExist(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
  
}
