import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PostService{

    error = new Subject<string>();

    constructor(private http : HttpClient){}
    
    createAndStorePost(title:string, content:string){
        const postData : Post = {title: title, content : content}
        this.http.post<{ name: string } >(
            'https://ng-complete-guide-b7e98-default-rtdb.firebaseio.com/posts.json',
            postData,
            {
                observe: 'response'
            }
            )
        .subscribe( responseBody => {
          console.log(responseBody);
        }, error => {
            this.error.next(error.message);
        });
    }

    fetchPost(){
        let searchParams = new HttpParams();    //serachparams is immuntable, hence we appedn
        searchParams = searchParams.append('print', 'pretty')
        searchParams = searchParams.append('custom ', 'key')

       return this.http
        .get< { [key:string] : Post}> 
        ('https://ng-complete-guide-b7e98-default-rtdb.firebaseio.com/posts.json',
        {
            headers : new HttpHeaders({ 
                "Custom-Header" : 'Hello'
            }),
            params : searchParams

            // params : new HttpParams().set('print','pretty')          or we can as above.
            // https://ng-complete-guide.firebaseio.com/posts.json?print=pretty
        }
        )
      .pipe(map(responseData  =>{
        const postsArray : Post[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key],id: key })
        }
      }
      return postsArray
    }),
    catchError(errorRes => {
        //eg sending analytics server
       return throwError(errorRes);
    })
    );
      

    }

    deletePosts(){
       return this.http.delete
       ('https://ng-complete-guide-b7e98-default-rtdb.firebaseio.com/posts.json',
       {
            observe : 'events',
            responseType : 'json'
       }
       ).pipe(
        tap(event => {
            console.log(event);
            if(event.type === HttpEventType.Sent){
                // we can add our own output when event was sent.
            }
            if(event.type === HttpEventType.Response){
                console.log(event.body);
            }
        })
       );
    }
} 