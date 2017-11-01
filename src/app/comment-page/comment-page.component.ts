import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../models/item";

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
  @Input() item: Item;


  constructor() {
  }

  ngOnInit() {
  }

}
