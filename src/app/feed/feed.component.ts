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

  constructor(private api: ApiService) {
  }

  getStories(): void {
    this.api.getStories().then(items => {
      const mapped = _.flatMap(items, i => i);
      return this.items = _.filter(mapped, s => s.post_type === 'story');
    });
  }

  ngOnInit(): void {
    this.getStories();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}
