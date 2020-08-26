import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatToolbarModule, MatIconModule, MatButtonModule,  } from '@angular/material';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';
import { VideoDetailsComponent } from './video-details/video-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListVideosComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
