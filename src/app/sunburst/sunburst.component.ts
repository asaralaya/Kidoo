
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import Sunburst from 'sunburst-chart';
import * as data from './data.json';

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {
  @ViewChild('sbChart', { static: true }) sbChartEl: ElementRef;
  loading: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getData();
    this.loading = true;
  }

  getData() {
    const color = d3.scaleOrdinal(d3.schemePaired);
    const mainData = data;
    console.log(mainData);
    Sunburst()
      .data(mainData)
      .size('size')
      .height(800)
      .showLabels(true)
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
      .color((d) => color(d.name))(this.sbChartEl.nativeElement);
    this.loading = false;
  }
}
