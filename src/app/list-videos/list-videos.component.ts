import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from './youtube-api.service';
import { PaginationService } from './pagination.service';
import { Subscription } from 'rxjs';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {
  videos = [];
  private subscription: Subscription;
  nextPageToken: any;
  searchTerm: string = '';
  loading: boolean;
  constructor(public youtubeApiService: YoutubeApiService,
              public paginationService: PaginationService,
              public route: Router) { }

  ngOnInit() {

    this.subscription = this.paginationService.notifyObservable$.subscribe( res => {
      if(res) {
        this.searchVideosByTermNextPage();
      }
      console.log('res: ', res);

    });
  }

  searchVideosByTerm(term) {
    this.loading = true;
    console.log('term: ', term)
    this.searchTerm = term;
    this.youtubeApiService.listVideosByTerm(term).subscribe(data => {
      this.loading = false;
      console.log('videos: ',data);
      this.videos = data.items;
      this.nextPageToken = data.nextPageToken;
    });
  }

  searchVideosByTermNextPage() {
    console.log('term: ', this.searchTerm);

    this.youtubeApiService.listVideosByTerm(this.searchTerm, this.nextPageToken).subscribe(data => {
      console.log('videos: ',data);
      this.videos.push(...data.items);
      this.nextPageToken = data.nextPageToken;
    });
  }



  onScroll(event) {
    const table = event.target;
    if (table.scrollHeight - table.scrollTop === table.clientHeight) {
      this.paginationService.notifyOther('paginated');
    }

  }

  showDetails(id) {
    this.route.navigate(['video-details', id]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
