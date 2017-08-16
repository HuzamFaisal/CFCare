import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

import { HomePage } from '../home/home';
import { EnzymeIntakeChartPage } from '../enzyme-intake-chart/enzyme-intake-chart';
import { EnzymePage } from '../enzyme/enzyme';
import { NutritionPage } from '../nutrition/nutrition';
import { FoodIntakePage } from '../food-intake/food-intake';
import { FoodIntakeChartPage } from '../food-intake-chart/food-intake-chart';
import { VitaminsAndMineralsPage } from '../vitamins-and-minerals/vitamins-and-minerals';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = NutritionPage;
  tab3Root: any = EnzymePage;
  tab4Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  goToSettings(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToVitaminsAndMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsAndMineralsPage);
  }goToFoodIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeChartPage);
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
   }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
