import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Item} from "../models/item";

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
      return this.items = items
    });
  }

  ngOnInit(): void {
    this.getStories();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}
