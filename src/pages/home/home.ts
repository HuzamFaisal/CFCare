import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VitaminsAndMineralsPage } from '../vitamins-and-minerals/vitamins-and-minerals';
import { FoodIntakeChartPage } from '../food-intake-chart/food-intake-chart';
import { EnzymeIntakeChartPage } from '../enzyme-intake-chart/enzyme-intake-chart';
import { EnzymePage } from '../enzyme/enzyme';
import { NutritionPage } from '../nutrition/nutrition';
import { FoodIntakePage } from '../food-intake/food-intake';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToVitaminsAndMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsAndMineralsPage);
  }goToEnzymeIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymeIntakeChartPage);
  }goToEnzyme(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymePage);
  }goToNutrition(params){
    if (!params) params = {};
    this.navCtrl.push(NutritionPage);
  }goToFoodIntake(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakePage);
  }goToFoodIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeChartPage);

  }
}
