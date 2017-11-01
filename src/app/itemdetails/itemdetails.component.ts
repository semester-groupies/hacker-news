import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Item} from "../models/item";

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  public item: Item;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit() {
    // this.item = this.route.paramMap.switchMap((params: ParamMap) => this.api.getItem(params.get('id')));
  }

}
