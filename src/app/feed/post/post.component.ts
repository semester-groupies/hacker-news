import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../models/item";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() {

  }

  @Input() post: Item;
  @Input() idx: number;

  ngOnInit() {
  }

}
