import { Injectable } from '@angular/core';
import { ToysUtil } from './toys-utils';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  constructor(private toysUtil: ToysUtil) { }

  public store1(){
    return this.toysUtil.store1;
  }
  public store2(){
    return this.toysUtil.store2;
  }
  public store3(){
    return this.toysUtil.store3;
  }

}
