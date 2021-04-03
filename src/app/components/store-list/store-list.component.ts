import { Component, OnInit } from '@angular/core';
import * as CommanConstant from "../../constants/common.constant";

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  constructor() {  }

  ngOnInit(): void {}

  get commanConstant(){
    return CommanConstant.STORE;
  }

}
