import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  public username: string;

  constructor(private api: ApiService) { }

  public forgot() {
    alert(`sorry, you can't reset your password just yet..`);
  }

  ngOnInit() {
  }

}
