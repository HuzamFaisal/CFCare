import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodIntakeChartPage } from '../food-intake-chart/food-intake-chart';

@Component({
  selector: 'page-food-intake',
  templateUrl: 'food-intake.html'
})
export class FoodIntakePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFoodIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeChartPage);
  }
}
