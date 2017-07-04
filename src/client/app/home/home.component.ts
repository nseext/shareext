import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) { }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    console.log(this.calculator(530.85, 512.05, 526.70))
  }


  calculator(high: any, low: any, close: any) {


    var pivot = (high + low + close) / 3.0
    var range = high - low
    var h5 = (high / low) * close
    var h4 = close + (high - low) * 1.1 / 2.0
    var h3 = close + (high - low) * 1.1 / 4.0
    var h2 = close + (high - low) * 1.1 / 6.0
    var h1 = close + (high - low) * 1.1 / 12.0
    var l1 = close - (high - low) * 1.1 / 12.0
    var l2 = close - (high - low) * 1.1 / 6.0
    var l3 = close - (high - low) * 1.1 / 4.0
    var l4 = close - (high - low) * 1.1 / 2.0
    var h6 = h5 + 1.168 * (h5 - h4)
    var l5 = close - (h5 - close)
    var l6 = close - (h6 - close)


    return ({
      paivo: pivot,
      r1: h1,
      r2: h2,
      r3: h3,
      r4: h4, 
      s1: l1,
      s2: l2,
      s3: l3,
      s4: l4  
    })


  }



  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
      names => this.names = names,
      error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
