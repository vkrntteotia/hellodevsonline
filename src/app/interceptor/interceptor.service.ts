import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()

export class InterceptorService implements HttpInterceptor {
  loaderToShow: any;
  constructor(
    public loadingController: LoadingController
    ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    const token = "my-token-string-from-server";
 
    //Authentication by setting header with token value
    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       'Authorization': token
    //     }
    //   });
    // }
 
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json; charset=UTF-8',
          'access-control-expose-headers':'X-WP-Total, X-WP-TotalPages',
          'allow':'GET',
          'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/77.0.3865.90 Chrome/77.0.3865.90 Safari/537.36',
          'Upgrade-Insecure-Requests':'1',
          'Host': 'www.hellodevs.online',
          'Cookie': '_ga=GA1.2.858917288.1560011457; wordpress_test_cookie=WP+Cookie+check; wordpress_logged_in_862db7ee3e38ebfae98e3367684cdaa6=o2h3ma%7C1571661836%7Cvb0VtjbOVeXnsJGM0hpp1V26T7wJ8u6uGNzD7LppGbq%7C39444f832f1fa499e45375c5a8678a714919f3dee295ce4c0966fea254f99eac; wp-settings-1=editor%3Dhtml%26libraryContent%3Dbrowse%26mfold%3Do; wp-settings-time-1=1571489037',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding':'gzip, deflate',
          'Cache-Control':'max-age=0',
          'connection':'Keep-Alive',
        }
      });
    }
 
    request = request.clone({
      headers: request.headers.set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3')
    });
    //this.showLoader();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        console.log('request is here',request);
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      }));
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Processing Server Request'
    }).then((res) => {
      res.present();
 
      res.onDidDismiss().then((dis) => {
        console.log('Loading dismissed!');
      });
    });
    //this.hideLoader();
  }
 
  hideLoader() {
      this.loadingController.dismiss();
  }
}
