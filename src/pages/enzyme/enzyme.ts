import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnzymeIntakeChartPage } from '../enzyme-intake-chart/enzyme-intake-chart';

@Component({
  selector: 'page-enzyme',
  templateUrl: 'enzyme.html'
})
export class EnzymePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToEnzymeIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymeIntakeChartPage);
  }
}
