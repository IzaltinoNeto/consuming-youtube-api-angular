import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from './youtube-api.service';

@Component({
  selector: 'app-list-videos',
  templateUrl: './list-videos.component.html',
  styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {
  videos = [];

  constructor(public youtubeApiService: YoutubeApiService) { }

  ngOnInit() {
  }

  searchVideosByTerm(term) {
    console.log('term: ', term)
    
    this.youtubeApiService.listVideosByTerm(term).subscribe(data => {
      console.log('videos: ',data);
      this.videos = data.items;
    });
  }


  onScroll() {
    console.log('onScrrl chamado');
  }
}
