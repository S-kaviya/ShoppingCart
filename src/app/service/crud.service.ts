import { Injectable } from '@angular/core';
import { Login } from './Login';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {



  //Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  //Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }

  //Add   AddBook=>ExistingUser
  ExistingUser(data: Login): Observable<any> {
    let API_URL = `${this.REST_API}/User-Added`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }

  //Get all Objects GetBooks => GetUsers
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}`);
  }


   //Error
   handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Hanlde Client Error

      errorMessage = error.error.message;
    }
    else {
      //Handle Server error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    })
  }
}
