import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public title: string;
  public url: string;
  public text: string;

  constructor(private api: ApiService, private router: Router) {
  }

  public postStory() {
    const story = {
      'type': "story",
      'title': this.title,
      'url': this.url,
      'text': this.text,
      'post_parent': -1,
      'hannest_id': 0
    };

    this.api.post(story).subscribe((res) => {
      this.router.navigate(['/feed']);
    });
  }

  ngOnInit() {
  }

}
