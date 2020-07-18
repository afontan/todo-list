import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {User} from "../models/user";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private TODOLIST_URL = "http://localhost:8080/users";
  private TODO_URL = "http://localhost:8080/users";

  constructor(
    private httpClient: HttpClient
  ) { }

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


}
