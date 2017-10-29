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
import {ForgotComponent} from './forgot/forgot.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/feed', pathMatch: 'full'},
  {path: 'feed', component: FeedComponent, data: {title: 'Hacker News'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: 'forgot', component: ForgotComponent, data: {title: 'Reset Password'}},
  {path: 'story', component: StoryComponent, data: {title: 'Submit'}}
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    LoginComponent,
    ForgotComponent,
    StoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
