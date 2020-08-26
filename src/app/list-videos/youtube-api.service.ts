import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  standardUrl = 'https://www.googleapis.com/youtube/v3/';
  key= 'AIzaSyBx07D_SL_5QMNSsNRR9JiLXsC3xy4wPrM';

  constructor(public http: HttpClient) { }

  

  public listVideosByTerm(searchTerm: string, nextPageToken: string = ''): Observable<any> {
    const requestUrl = `${this.standardUrl}search?part=id%2Csnippet&type=video&q=${searchTerm}&key=${this.key}&maxResults=10&pageToken=${nextPageToken}`;
   
    
    return this.http.get(requestUrl)
        .pipe(
            map((res: any) => res)
        );
}

  public getVideosDetailsById(id: string): Observable<any> {
    const requestUrl = `${this.standardUrl}videos?id=${id}&part=snippet,statistics&key=${this.key}`;
   
    
    return this.http.get(requestUrl)
        .pipe(
            map((res: any) => res)
        );
}

}
