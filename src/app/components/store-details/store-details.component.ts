import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToysService } from "../../service/toys.service";

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {
  public storeId: string = "";
  public storeValue: any;

  constructor(private route: ActivatedRoute, private toysService: ToysService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.storeId = params['id'];
    });
    this.getStorebyID();
  }

  public getStorebyID(){
    switch (this.storeId) {
      case "store1":
        this.storeValue = this.toysService.store1()
        break;
      case "store2":
        this.storeValue = this.toysService.store2()
        break;
        case "store3":
          this.storeValue = this.toysService.store3()
          break;
    }
  }



}
