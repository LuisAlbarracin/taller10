import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";

import { Router } from "@angular/router";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const modificarPeticion = request.clone({ headers: request.headers.set('authorization', 'Bearer ' + token) });
    return next.handle(modificarPeticion).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/public/login']);
          localStorage.removeItem('token');
          localStorage.removeItem('foto');
        }
        return throwError(() => error);
      })
    );
  }
}
