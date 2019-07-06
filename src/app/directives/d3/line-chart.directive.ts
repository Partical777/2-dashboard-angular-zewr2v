import { Directive, ElementRef, Input  } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[D3FuckingLineChart]'
})

export class D3LineChartDirective {
  @Input('ChartType') whattype;
  
  constructor(private el: ElementRef) {
    // el.nativeElement.innerHTML = '<div>Fuck</div>';
    // console.log(el.nativeElement.offsetWidth);
    console.log(this.whattype);
    // if (this.whattype == 'linechart'){
      this.createLineChart();
    // }
  }

  createLineChart(){

    var data = [];

    for(var i = 0; i < 20; i++){
      var num = d3.randomUniform(1, 50)();
      data.push(num);
    }

    // d3.select( this.el.nativeElement)
    //   .selectAll('div')
    //   .data(data)
    //   .enter()
    //   .append('div')
    //   .classed('bar', true)
    //   .style('height', function(d){
    //     return d*10 + "px";
    //   })
    //   .style('width', function(){
    //     return 30 + "px";
    //   })
    //   .style('display', 'inline-block')
    //   .style('background-color', '#7ED26D')
    //   .style('margin-left', '5px');

        var chart_width     =   800;
    var chart_height    =   400;
    var bar_padding     =   5;
    var svg             =   d3.select( this.el.nativeElement )
        .append( 'svg' )
        // .attr( 'width', chart_width )
        // .attr( 'height', chart_height );
        .attr('viewBox', '0 0 800 400')
        .attr('preserveAspectRatio', 'xMidYMid');


    // Bind data and create bars
    svg.selectAll( "rect" )
        .data( data )
        .enter()
        .append( "rect" )
        .attr( 'x', function( d, i ){
            return i *  ( chart_width / data.length );
        })
        .attr( 'y', function( d ){
            return chart_height - d * 5;
        })
        .attr( 'width', chart_width / data.length - bar_padding )
        .attr( 'height', function( d ){
            return d * 5;
        })
        .attr( 'fill', '#7ED26D' );

    // Create Labels
    svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text(function( d ){
            return Math.round(d);
        })
        .attr("x", function(d, i) {
            return i * (chart_width / data.length) + (chart_width / data.length - bar_padding) / 2;
        })
        .attr("y", function(d) {
            return chart_height - (d * 5) + 15;
        })
        .attr("font-size", "14px")
        .attr("fill", "#fff")
        .attr("text-anchor", "middle");
  }

}