import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-enzyme-intake-chart',
  templateUrl: 'enzyme-intake-chart.html'
})
export class EnzymeIntakeChartPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
}
