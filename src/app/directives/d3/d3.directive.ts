import { Directive, ElementRef, Input, OnInit   } from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector: '[D3FuckingGod]'
})

export class D3Directive {
  @Input('ChartType') whattype: string;
  
  constructor(private el: ElementRef) {
    // el.nativeElement.innerHTML = '<div>Fuck</div>';
    // console.log(el.nativeElement.offsetWidth);
    if (this.whattype == 'linechart'){
      this.createLineChart();
    }
  }

  ngOnInit() {
    console.log(this.whattype);
    switch(this.whattype) {
      case 'barchart':{
        this.createBarChart();
        break;
      }
      case 'stackbarchart':{
        this.createStackBarChart();
        break;
      }
      case 'donutchart':{
        this.createDonutChart();
        break;
      }
      case 'filllinechart':{
        this.createFillLineChart();
        break;
      }
      case 'linechart':{
        this.createLineChart();
        break;
      }
      case 'scatterplot':{
        this.createScatterplot();
        break;
      }
      case 'onlynumber':{
        this.createOnlyNumber();
        break;
      }
    }
  }

  createBarChart(){

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
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
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

  createStackBarChart(){
    // Data
    var data            =   [
        { pigeons: 6, doves: 8, eagles: 15 },
        { pigeons: 9, doves: 15, eagles: 5 },
        { pigeons: 11, doves: 13, eagles: 14 },
        { pigeons: 15, doves: 4, eagles: 20 },
        { pigeons: 22, doves: 25, eagles: 23 }
    ];

    var chart_width     =   800;
    var chart_height    =   400;
    var color           =   d3.scaleOrdinal( d3.schemeCategory10 );

    //Stack Layout
    var stack = d3.stack().keys([
      'pigeons', 'doves', 'eagles' 
    ]);
    var stack_data = stack(data);

    //Scales
    var x_scale = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([0, chart_width])
        .paddingInner(0.05);
    var y_scale = d3.scaleLinear()
        .domain([
          0,
          d3.max(data, function(d){
              return d.pigeons + d.doves + d.eagles;
          })
        ])
        .range([chart_height, 0]);

    // Create SVG Element
    var svg             =   d3.select( this.el.nativeElement )
        .append("svg")
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
        .attr('preserveAspectRatio', 'xMidYMid');
        
    //Groups
    var groups = svg.selectAll('g')
        .data(stack_data)
        .enter()
        .append('g')
        .style('fill', function(d, i){
          return color(i); 
        });
        
    //Rectangles
    groups.selectAll('rect')
        .data(function(d){
            return d;
        })
        .enter()
        .append('rect')
        .attr('x', function(d, i){
            return x_scale(i);
        })
        .attr('y', function(d){
            return y_scale(d[1]);
        })
        .attr('height', function(d){
            return y_scale(d[0]) - y_scale(d[1]);
        })
        .attr('width', x_scale.bandwidth());
  }

  createDonutChart(){
    // Data
    var data            =   [ 35, 6, 20, 47, 19 ];
    var chart_width     =   600;
    var chart_height    =   600;
    var color           =   d3.scaleOrdinal(d3.schemeCategory10);

    //Pie Layout
    var pie = d3.pie();

    //Arc
    var outer_radius = chart_width/2;
    var inner_radius = 200;
    var arc = d3.arc()
        .innerRadius(inner_radius)
        .outerRadius(outer_radius);
        
    var svg = d3.select( this.el.nativeElement )
        .append('svg')
        .style("margin", "10px")
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
        .attr('preserveAspectRatio', 'xMidYMid');
        
    var arcs = svg.selectAll("g.arc")
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc')
        .attr(
            'transform',
            "translate(" + outer_radius + "," + chart_height/2 + ")"
        );

    //Arcs    
    arcs.append('path')
        .attr('fill',function(d, i){
          return color(i)
        })
        .attr('d', arc);
        
    //Labels
    arcs.append('text')
        .attr('transform', function(d, i){
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr('text-anchor', 'text-middle')
        .text(function(d){
            return d.value;
        })
  }

  createFillLineChart() {
    // Data
    var data            =   [
        { date: 1988, num: 51 }, { date: 1989, num: 60 },
        { date: 1990, num: 62 }, { date: 1991, num: 64 },
        { date: 1992, num: 69 }, { date: 1993, num: 69 },
        { date: 1994, num: 75 }, { date: 1995, num: 80 },
        { date: 1996, num: 91 }, { date: 1997, num: 93 },
        { date: 1998, num: 97 }, { date: 1999, num: 100 },
        { date: 2000, num: 103 }, { date: 2001, num: 104 },
        { date: 2002, num: 105 }, { date: 2003, num: 110 },
        { date: 2004, num: 111 }, { date: 2005, num: 112 },
        { date: 2006, num: 112 }, { date: 2007, num: 113 },
        { date: 2008, num: 119 }, { date: 2009, num: 128 },
        { date: 2010, num: 139 }, { date: 2011, num: 139 },
        { date: 2012, num: 139 }, { date: 2013, num: 140 },
        { date: 2014, num: 143 }, { date: 2015, num: 146 },
        { date: 2016, num: 147 }, { date: 2017, num: 149 }
    ];
    var time_parse      =   d3.timeParse( '%Y' );
    var time_format     =   d3.timeFormat( '%Y' );
    var chart_width     =   1000;
    var chart_height    =   800;
    var padding         =   50;

    // Format Date
    data.forEach(function(e, i){
        data[i].date    =   time_parse(e.date);
    });

    // Scales
    var x_scale         =   d3.scaleTime()
        .domain([
            d3.min(data, function(d) {
                return d.date;
            }),
            d3.max(data, function(d) {
                return d.date;
            })
        ])
        .range([padding, chart_width - padding]);
    var y_scale         =   d3.scaleLinear()
        .domain([
            0, d3.max(data, function(d) {
                return d.num;
            })
        ])
        .range([chart_height - padding, padding]);
        
    var area = d3.area()
        .defined(function(d){
            return d.num >= 0;
        })
        .x(function(d){
            return x_scale(d.date);
        })
        .y0(function(d){
            return y_scale.range()[0];
        })
        .y1(function(d){
            return y_scale(d.num);
        });

    // Create SVG
    var svg             =   d3.select( this.el.nativeElement )
        .append("svg")
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
        .attr('preserveAspectRatio', 'xMidYMid');

    // Create Axes
    var x_axis          =   d3.axisBottom(x_scale)
        .ticks(10)
        .tickFormat(time_format);
    var y_axis          =   d3.axisLeft(y_scale)
        .ticks(12);
    svg.append("g")
        .attr("transform", "translate(0," + (chart_height - padding) + ")")
        .call(x_axis);
    svg.append("g")
        .attr("transform", "translate(" + padding + ",0)")
        .call(y_axis);
        
    //Create Line
    var line = d3.line()
        .defined(function(d){
            return d.num >= 0;
        })
        .x(function(d){
            return x_scale(d.date);
        })
        .y(function(d){
            return y_scale(d.num);
        });
        
    svg.append('path')
        .datum(data)
        .attr('fill', '#73ff36')
        .attr('d', area);
        
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#73FF36')
        .attr('stroke-width', 5)
        .attr('d', line);
  }

  createLineChart() {
    // Data
    var data            =   [
        { date: 1988, num: 51 }, { date: 1989, num: 60 },
        { date: 1990, num: 62 }, { date: 1991, num: 64 },
        { date: 1992, num: 69 }, { date: 1993, num: 69 },
        { date: 1994, num: 75 }, { date: 1995, num: 80 },
        { date: 1996, num: 91 }, { date: 1997, num: 93 },
        { date: 1998, num: 97 }, { date: 1999, num: 100 },
        { date: 2000, num: 103 }, { date: 2001, num: 104 },
        { date: 2002, num: 105 }, { date: 2003, num: 110 },
        { date: 2004, num: 111 }, { date: 2005, num: 112 },
        { date: 2006, num: 112 }, { date: 2007, num: 113 },
        { date: 2008, num: 119 }, { date: 2009, num: 128 },
        { date: 2010, num: 139 }, { date: 2011, num: 139 },
        { date: 2012, num: 139 }, { date: 2013, num: 140 },
        { date: 2014, num: 143 }, { date: 2015, num: 146 },
        { date: 2016, num: 147 }, { date: 2017, num: 149 }
    ];
    var time_parse      =   d3.timeParse( '%Y' );
    var time_format     =   d3.timeFormat( '%Y' );
    var chart_width     =   1000;
    var chart_height    =   800;
    var padding         =   50;

    // Format Date
    data.forEach(function(e, i){
        data[i].date    =   time_parse(e.date);
    });

    // Scales
    var x_scale         =   d3.scaleTime()
        .domain([
            d3.min(data, function(d) {
                return d.date;
            }),
            d3.max(data, function(d) {
                return d.date;
            })
        ])
        .range([padding, chart_width - padding]);
    var y_scale         =   d3.scaleLinear()
        .domain([
            0, d3.max(data, function(d) {
                return d.num;
            })
        ])
        .range([chart_height - padding, padding]);

    // Create SVG
    var svg             =   d3.select( this.el.nativeElement )
        .append("svg")
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
        .attr('preserveAspectRatio', 'xMidYMid');

    // Create Axes
    var x_axis          =   d3.axisBottom(x_scale)
        .ticks(10)
        .tickFormat(time_format);
    var y_axis          =   d3.axisLeft(y_scale)
        .ticks(12);
    svg.append("g")
        .attr("transform", "translate(0," + (chart_height - padding) + ")")
        .call(x_axis);
    svg.append("g")
        .attr("transform", "translate(" + padding + ",0)")
        .call(y_axis);
        
    //Create Line
    var line = d3.line()
        .defined(function(d){
            return d.num >= 0;
        })
        .x(function(d){
            return x_scale(d.date);
        })
        .y(function(d){
            return y_scale(d.num);
        });
        
    svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#73FF36')
        .attr('stroke-width', 5)
        .attr('d', line);
  }

  createScatterplot() {
    var data            =   [
        [ 400, 200 ],
        [ 210,140 ],
        [ 722,300 ],
        [ 70,160 ],
        [ 250,50 ],
        [ 110,280 ],
        [ 699,225 ],
        [ 90, 220 ]
    ];
    var chart_width     =   800;
    var chart_height    =   400;
    var padding         =   50;

    //Create Svg

    var svg = d3.select( this.el.nativeElement )
        .append('svg')
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
        .attr('preserveAspectRatio', 'xMidYMid');

    //Create Scale

    var x_scale = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d[0];
        })])
        .range([padding, chart_width - padding*2]);

    var y_scale = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d[1];
        })])
        .range([chart_height - padding, padding]);
        
    var r_scale = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) {
            return d[1];
        })])
        .range([5, 30]);
        
    var a_scale = d3.scaleSqrt()
        .domain([0, d3.max(data, function(d) {
            return d[1];
        })])
        .range([0, 25]);

    //Create Axis
    var x_axis = d3.axisBottom(x_scale)
        // .ticks(4);
        // .tickValues([0, 10, 20, 30, 50, 750, 800]);
    svg.append('g')
        .attr('class', 'x-axis')
        .attr(
            'transform',
            'translate(0, ' + (chart_height - padding) + ')'
        )
        .call(x_axis);
        
    var y_axis = d3.axisLeft(y_scale)
        .ticks(5)
        // .tickValues([0, 10, 20, 30, 50, 750, 800]);
        // .tickFormat(function(d){
        //   return d + '%'; 
        // });
    svg.append('g')
        .attr('class', 'y-axis')
        .attr(
            'transform',
            'translate(' + padding + ', 0)'
        )
        .call(y_axis);

    //Create Circle

    svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', function(d){
            return x_scale(d[0]);
        })
        .attr('cy', function(d){
            return y_scale(d[1]);
        })
        .attr('r', function(d){
            return a_scale(d[1]);
        })
        .attr('fill', '#D1AB0E');

    //Create Label

    svg.append('g').selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text(function(d){
            return d.join(',');
        })
        .attr('x', function(d){
            return x_scale(d[0]);
        })
        .attr('y', function(d){
            return y_scale(d[1]);
        });

  }
  
  createOnlyNumber() {
    var data            =   [
        [ 400, 200 ],
        [ 210,140 ],
        [ 722,300 ],
        [ 70,160 ],
        [ 250,50 ],
        [ 110,280 ],
        [ 699,225 ],
        [ 90, 220 ]
    ];
    var chart_width     =   800;
    var chart_height    =   400;
    var padding         =   50;

    //Create Svg

    var svg = d3.select( this.el.nativeElement )
        .append('svg')
        // .text("Fuck")
        .style("font-size", "750%")
        .attr('viewBox', '0 0 ' + chart_width + ' ' + chart_height)
        .attr('preserveAspectRatio', 'xMidYMid');

    svg.append('text')
        .text("35%")
        .attr('x',"10%")
        .attr('y', "75%");
  }

}