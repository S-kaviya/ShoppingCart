import { Injectable } from "@angular/core";
import { Register } from "./Register";

import { Observable,throwError } from "rxjs";

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  REST_API: string = "http://localhost:8000/api";

  httpHeaders = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpClient: HttpClient) {}

  Register(data: Register): Observable<any> {
    let API_URL = `${this.REST_API}/Register`;

    return this.httpClient

      .post(API_URL, data)

      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";

    if (error.error instanceof ErrorEvent) {
      // Handle client error

      errorMessage = error.error.message;
    } else {
      // Handle server error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(() => {
      errorMessage;
    });
  }
}
