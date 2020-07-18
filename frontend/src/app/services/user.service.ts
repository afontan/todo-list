import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private REST_API_SERVER = "http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  login(user: User){
    return this.httpClient.post(this.REST_API_SERVER+"/login", user).pipe(catchError(this.handleError));
  }

  signup(user: User){
    return this.httpClient.post(this.REST_API_SERVER+"/sign-up", user).pipe(catchError(this.handleError));
  }
}
