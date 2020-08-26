import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { VideoDetailsComponent } from './video-details/video-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'videos-list'
  },
  {
    path: 'videos-list',
    component: ListVideosComponent 
  },
  {
    path: 'video-details/:id',
    component: VideoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
