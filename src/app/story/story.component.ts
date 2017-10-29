import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public title: string;
  public url: string;
  public text: string;

  constructor(private api: ApiService) {
  }

  public postStory() {
    console.log('::posting story::');
    let story = {
      'title': this.title,
      'url': this.url,
      'text': this.text
    };

    this.api.post(story).subscribe((res) => {
      console.log('story posted', res);
    });
  }

  ngOnInit() {
  }

}
