import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { YoutubeApiService } from '../list-videos/youtube-api.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videoId: string;
  videoUrl: any;
  videoDetails: any;

  constructor(private route: ActivatedRoute,
              private youtubeApiService: YoutubeApiService,
              private dom:DomSanitizer) {
    this.videoId = this.route.snapshot.params.id; 
    this.videoUrl = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}`);
    //this.videoUrl = this.dom.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/59q_S8ttGyI`);
  }

  ngOnInit() {
    this.youtubeApiService.getVideosDetailsById(this.videoId).subscribe(data => {
      console.log('details: ', data.items[0]);
      this.videoDetails = data.items[0];
    });
  }

}
