import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorSerice implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        console.log('Req on its way');
        const modifiedRequest = req.clone({
            headers: req.headers.append('Auth','xyz')
        });
        return next.handle(modifiedRequest).pipe(tap(event => {
            console.log(event)
            if(event.type === HttpEventType.Response){
                console.log('Body data' + event.body);
                console.log(event.body)
            }
        }));

     
    }
}