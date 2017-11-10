import {Component, OnInit} from '@angular/core';
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

  public items: Item;
  private title = " ";
  private url = " ";
  public text: string;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) {
    console.log(this.items);
  }

  ngOnInit() {
    const me = this;
    this.route.paramMap.switchMap((params: ParamMap) => this.api.getItem(params.get('id'))).subscribe(res => {
      me.items = res;
      console.log(me.items);
    });
  }

  createComment() {
    const comment = {
      'type': "comment",
      'title': this.title,
      'url': this.url,
      'text': this.text,
      'post_parent': this.items.id
    };

    this.api.post(comment).subscribe((res) => {
      this.router.navigate(['/item/' + this.items.id]);
    });
  }

}
