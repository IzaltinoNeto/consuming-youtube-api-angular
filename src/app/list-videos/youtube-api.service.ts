import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  standardUrl = 'https://www.googleapis.com/youtube/v3/';
  key= 'AIzaSyBX4tJS83vVmtqHnzKoEyiYBsgSJsf5EwM';

  constructor(public http: HttpClient) { }

  

  public listVideosByTerm(searchTerm: string): Observable<any> {
    const requestUrl = `${this.standardUrl}search?part=id%2Csnippet&q=${searchTerm}&key=${this.key}`;
   
    return this.http.get(requestUrl)
        .pipe(
            map((res: any) => res)
        );
}

}
