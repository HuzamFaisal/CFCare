import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-enzyme-intake-chart',
  templateUrl: 'enzyme-intake-chart.html',

})
export class EnzymeIntakeChartPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

    @ViewChild('lineCanvas') lineCanvas;

    lineChart: any;


  constructor(public navCtrl: NavController) {
  }
  
  ionViewDidLoad() {


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
            type: 'line',
            data: {
                labels: ["Lactase", "Amylase", "Proteolyti", "Cellulase", "Vitamins", "June", "Amylase"],
                datasets: [
                    {
                        label: "Enzyme Intake (mg)",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 90, 40],
                        spanGaps: false,
                    }
                ]
            }
 
        });
  
  }
}
