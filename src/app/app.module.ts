import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {FeedComponent} from './feed/feed.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {StoryComponent} from './story/story.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./api.service";

const appRoutes: Routes = [
  {path: 'feed', component: FeedComponent},
  {path: 'login', component: LoginComponent},
  {path: 'story', component: StoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    LoginComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,
      // { enableTracing : true}
    ),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
