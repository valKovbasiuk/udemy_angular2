import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Http, Headers, Response } from '@angular/http';
import { throwError } from 'rxjs';
// import 'rxjs/Rx';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(
      'https://udemy-ng-course-17c26.firebaseio.com/data.json',
      servers,
      { headers }
    );
    // return this.http.post(
    //   'https://udemy-ng-course-17c26.firebaseio.com/data.json',
    //   servers,
    //   { headers }
    // );
  }

  getServers() {
    return this.http
      .get('https://udemy-ng-course-17c26.firebaseio.com/data.json')
      .pipe(
        map((response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'Fetched_' + server.name;
          }
          return data;
        })
      )
      .pipe(
        catchError(error => {
          return throwError('Error!');
        })
      );
  }

  getAppName() {
    return this.http
      .get('https://udemy-ng-course-17c26.firebaseio.com/appName.json')
      .pipe(map(response => response.json()));
  }
}
