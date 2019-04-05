import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
export * from "d3-scale";
export * from "d3-axis"

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  deg: number =0;
  radius=10;
  input = [ 100, 200 , 300, 400, 500, 600, 700, 800, 1000];
  constructor() { }
  
  ngOnInit() {
   
  }
  ngAfterContentInit(){
    d3.select("#list").selectAll("li").data([10, 20, 30, 25, 15]);
    d3.select("p").style("color","red");
    
  }
  clicked(event: any){
    console.log(event);
    d3.select(event.target).append('circle').attr('cx',event.x).attr('cy',event.y).attr('r',this.radius).attr('fill','blue');
    console.log(event.x +" "+ event.y)
    
  }
  clickMe(){
    d3.select(".container").transition().style("background-color", "aqua").duration(3000);
    var width = 1000;
    var height = 500;
    var widthScale = d3.scaleLinear().domain([1200,0]).range([0,width]);
    var heightScale = d3.scaleLinear().domain([1200,0]).range([0,height]);
    var colorScale = d3.scaleLinear().domain([0,1200]).range(["red","violet"]);
    var svg = d3.select("#svgcontainer")
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .style("margin" , 50)
     .append('g');
    //  .attr('transform', 'translate('+ 500 +','+ 1200 +') rotate(180)');
    var xAxis = d3.axisRight().scale(heightScale);
    var yAxis = d3.axisBottom().scale(widthScale);
     
    // svg.append("line")
    //  .attr("x1", 100)
    //  .attr("y1", 100)
    //  .attr("x2", 500) 
    //  .attr("y2", 250)
    //  .style("stroke", "rgb(255,0,0)")
    //  .style("stroke-width", 2);
    var bar = svg.selectAll('rect')
                  .data(this.input)
                  .enter()
                    .append('rect')
                    .attr('height', function(d){return height - heightScale(d);}).transition().duration(3000)
                    .attr('width', 30)
                    // .attr('transform',  'translate('+ 500 +','+ 1200 +') rotate(180)')
                    .style('fill', function(d){return colorScale(d);})
                    .attr('x', function(d,i){
                      return(50+i*50)
                    })
                    .attr('y',function(d){return height-(height-heightScale(d));});
    svg.append('g').call(xAxis).attr('transform','rotate(0)');
    // svg.append('g').call(yAxis).attr('transform','rotate(0)');
  }
}