import React from 'react'
import { IconButton, RaisedButton } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle } from 'reactivity'
import ChartJs from 'react-chartjs'
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css!'

class DashboardPage extends React.Component {
	constructor() {
		super();
		this.styles = {
			cell: {
				padding: '0'
			}
		};
	}
	
	render() {
		let LineChart = ChartJs.Line;
		let lineChartData = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		};
		let lineChartOptions = {
			responsive: true,
			
			///Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,
		
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",
		
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,
		
			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,
		
			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,
		
			//Boolean - Whether the line is curved between points
			bezierCurve : true,
		
			//Number - Tension of the bezier curve between points
			bezierCurveTension : 0.4,
		
			//Boolean - Whether to show a dot for each point
			pointDot : true,
		
			//Number - Radius of each point dot in pixels
			pointDotRadius : 4,
		
			//Number - Pixel width of point dot stroke
			pointDotStrokeWidth : 1,
		
			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
			pointHitDetectionRadius : 20,
		
			//Boolean - Whether to show a stroke for datasets
			datasetStroke : true,
		
			//Number - Pixel width of dataset stroke
			datasetStrokeWidth : 2,
		
			//Boolean - Whether to fill the dataset with a colour
			datasetFill : true,
		
			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		};
		let BarChart = ChartJs.Bar;
		let barChartData = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
					label: "My Second dataset",
					fillColor: "rgba(151,187,205,0.2)",
					strokeColor: "rgba(151,187,205,1)",
					pointColor: "rgba(151,187,205,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(151,187,205,1)",
					data: [28, 48, 40, 19, 86, 27, 90]
				}
			]
		};
		let barChartOptions = {
			responsive: true,
			
			//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero : true,
		
			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : true,
		
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",
		
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,
		
			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: true,
		
			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: true,
		
			//Boolean - If there is a stroke on each bar
			barShowStroke : true,
		
			//Number - Pixel width of the bar stroke
			barStrokeWidth : 2,
		
			//Number - Spacing between each of the X value sets
			barValueSpacing : 5,
		
			//Number - Spacing between data sets within X values
			barDatasetSpacing : 1,
		
			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		};
		return (
			<Dashboard>
				<Widget width={12}>
					<WidgetHeader
						title="ChartJs"
						subtitle="Chart examples based on ChartJs library">
					</WidgetHeader>
					<WidgetTitle title='Line Chart' />
					<WidgetText>
						<Grid>
							<Cell size='1/12' style={this.styles.cell}>
							</Cell>
							<Cell size='10/12' style={this.styles.cell}>
								<LineChart data={lineChartData} options={lineChartOptions}/>
							</Cell>
						</Grid>
					</WidgetText>
					<WidgetTitle title='Bar Chart' />
					<WidgetText>
						<Grid>
							<Cell size='1/12' style={this.styles.cell}>
							</Cell>
							<Cell size='10/12' style={this.styles.cell}>
								<BarChart data={barChartData} options={barChartOptions}/>
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
			);
	}
}

export default DashboardPage