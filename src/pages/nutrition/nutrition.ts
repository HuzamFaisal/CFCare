import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodIntakePage } from '../food-intake/food-intake';
import { FoodIntakeChartPage } from '../food-intake-chart/food-intake-chart';
import { VitaminsAndMineralsPage } from '../vitamins-and-minerals/vitamins-and-minerals';

@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html'
})
export class NutritionPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToFoodIntake(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakePage);
  }goToFoodIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeChartPage);
  }goToVitaminsAndMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsAndMineralsPage);
  }
}
