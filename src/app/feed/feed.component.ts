import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Item} from "../models/item";
import * as _ from "lodash";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public items: Item[];
  public selectedItem: Item;
  sizeList = new Array(1000);
  p = 0;

  constructor(private api: ApiService) {
    this.api.getCount().toPromise().then(res => {
        this.sizeList = new Array(res);

      }
    );
  }

  getStories(page): void {
    this.api.getStories(page).then(items => {
      const mapped = _.flatMap(items, i => i);
      return this.items = _.filter(mapped, s => s.post_type === 'story');
    });
  }

  ngOnInit(): void {
    this.getStories(0);
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }


  pageChanged(page: number) {
    this.getStories(page);
  }
}
