import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { VitaminsAndMineralsPage } from '../vitamins-and-minerals/vitamins-and-minerals';
import { FoodIntakeChartPage } from '../food-intake-chart/food-intake-chart';
import { EnzymeIntakeChartPage } from '../enzyme-intake-chart/enzyme-intake-chart';
import { EnzymePage } from '../enzyme/enzyme';
import { NutritionPage } from '../nutrition/nutrition';
import { FoodIntakePage } from '../food-intake/food-intake';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
   }goToEnzyme(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymePage);
  }goToEnzymeIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(EnzymeIntakeChartPage);
  }goToNutrition(params){
    if (!params) params = {};
    this.navCtrl.push(NutritionPage);
  }goToFoodIntake(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakePage);
  }goToFoodIntakeChart(params){
    if (!params) params = {};
    this.navCtrl.push(FoodIntakeChartPage);
  }goToVitaminsAndMinerals(params){
    if (!params) params = {};
    this.navCtrl.push(VitaminsAndMineralsPage);
  }goToSignup(params){
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
