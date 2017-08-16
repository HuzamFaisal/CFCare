import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { EnzymePage } from '../pages/enzyme/enzyme';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { FoodIntakePage } from '../pages/food-intake/food-intake';
import { VitaminsAndMineralsPage } from '../pages/vitamins-and-minerals/vitamins-and-minerals';
import { FoodIntakeChartPage } from '../pages/food-intake-chart/food-intake-chart';
import { EnzymeIntakeChartPage } from '../pages/enzyme-intake-chart/enzyme-intake-chart';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NutritionPage,
    EnzymePage,
    SettingsPage,
    TabsControllerPage,
    LoginPage,
    FoodIntakePage,
    VitaminsAndMineralsPage,
    FoodIntakeChartPage,
    EnzymeIntakeChartPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NutritionPage,
    EnzymePage,
    SettingsPage,
    TabsControllerPage,
    LoginPage,
    FoodIntakePage,
    VitaminsAndMineralsPage,
    FoodIntakeChartPage,
    EnzymeIntakeChartPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}