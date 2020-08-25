import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from './youtube-api.service';
import { PaginationService } from './pagination.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {
  videos = [];
  private subscription: Subscription;
  nextPage: any;
  searchTerm: string = '';
  constructor(public youtubeApiService: YoutubeApiService,
              public paginationService: PaginationService,) { }

  ngOnInit() {
    this.subscription = this.paginationService.notifyObservable$.subscribe( res => {
   //   this.searchVideosByTermNextPage();
      console.log('res: ', res);
    });
  }

  searchVideosByTerm(term) {
    console.log('term: ', term)
    this.searchTerm = term;
    this.youtubeApiService.listVideosByTerm(term).subscribe(data => {
      console.log('videos: ',data);
      this.videos = data.items;
    });
  }

 /*  searchVideosByTermNextPage() {
    console.log('term: ', this.searchTerm);

    this.youtubeApiService.listVideosByTerm(this.searchTerm, this.nextPage).subscribe(data => {
      console.log('videos: ',data);
      this.videos = data.items;
    });
  } */



  onScroll(event) {
    const table = event.target;
    if (table.scrollHeight - table.scrollTop === table.clientHeight) {
      this.paginationService.notifyOther('paginated');
    }

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
