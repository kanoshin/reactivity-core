import React from 'react'
import { IconButton, RaisedButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Wifi from 'material-ui/lib/svg-icons/notification/wifi'
import FreeBreakfast from 'material-ui/lib/svg-icons/places/free-breakfast'
import Memory from 'material-ui/lib/svg-icons/hardware/memory'
import Storage from 'material-ui/lib/svg-icons/device/storage'
import DeveloperBoard from 'material-ui/lib/svg-icons/hardware/developer-board'
import DesktopMac from 'material-ui/lib/svg-icons/hardware/desktop-mac'
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import FileFolder from 'material-ui/lib/svg-icons/file/folder';
import ActionAssignment from 'material-ui/lib/svg-icons/action/assignment';
import Colors from 'material-ui/lib/styles/colors';
import EditorInsertChart from 'material-ui/lib/svg-icons/editor/insert-chart';
import Usb from 'material-ui/lib/svg-icons/device/usb'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesBars } from 'react-sparklines'
import ChartJs from 'react-chartjs'
import { 
	Dashboard,
	Widget,
	WidgetText,
	WidgetHeader,
	WidgetControls,
	WidgetCloseControl,
	WidgetExpandControl,
	WidgetRefreshControl,
	WidgetActions,
    Grid,
    Cell,
    StackedWidget
} from 'reactivity'

import {
	Table,
	TableBody,
	TableHeader,
	TableFooter,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
    List,
    ListItem,
    Toggle,
    Divider,
    Avatar
} from 'material-ui'

let style = {
    deviceInfo: {
        wrapper: {
            display: 'block'
        },
        container: {
            marginLeft: 0, 
            paddingLeft: 30,
            paddingTop: 5
        },
        icon: {
            position: 'absolute', 
            top: 16, 
            left: 10
        }
    }
};

class DashboardPage extends React.Component {
    static contextTypes = {
        muiTheme: React.PropTypes.object
	}
    
	constructor(props) {
		super(props);
	    this.state = {
	    	tableSettings: {
	            fixedHeader: true,
	            fixedFooter: true,
	            stripedRows: false,
	            showRowHover: false,
	            selectable: true,
	            multiSelectable: true,
	            enableSelectAll: true,
	            deselectOnClickaway: false,
	            height: '350px',
	        },
            sparklineUsersData: [25, 16, 18, 22, 12, 15, 19, 22, 28, 33, 39, 
                                40, 52, 33, 26, 28, 12, 12, 15, 19, 22, 28, 
                                33, 39, 40, 52],
            sparklineCpuData: [90, 88, 55, 68, 62, 62, 40, 32, 33, 25, 66, 88, 
                                99, 100, 120, 100, 84, 88, 73, 66, 
                                60, 88, 99, 55, 33, 88, 120],
            chartToShow: 'bar',
            speed: 1000
        };
        this.sparklineHandler = () => {
            let newUsersValues = this.state.sparklineUsersData.slice();
            let last = newUsersValues.shift();
            newUsersValues.push(last);
            let newCpuValues = this.state.sparklineCpuData.slice();
            last = newCpuValues.shift();
            newCpuValues.push(last);
            this.setState({sparklineUsersData: newUsersValues, sparklineCpuData: newCpuValues});
        };
	}
    
    componentWillUnmount() {
        window.clearInterval(this.sparklineInterval);
    }

	render() {
        window.clearInterval(this.sparklineInterval);
        this.sparklineInterval = window.setInterval(this.sparklineHandler, this.state.speed);
        let BarChart = ChartJs.Bar;
        let LineChart = ChartJs.Line;
		let barChartData = {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [
				{
					fillColor: Colors.lightGreen400,
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [65, 59, 80, 81, 56, 55, 65, 75, 88, 90, 94, 105]
				}
			]
		}, lineChartData = {
			labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			datasets: [
				{
					fillColor: "rgba(216,48,48,1)",
					strokeColor: "rgba(216,48,48,1)",
					pointColor: "rgba(216,48,48,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(216,48,48,1)",
					data: [65, 59, 80, 81, 56, 55, 65, 75, 88, 90, 94, 105]
				}
			]
		};
		let barChartOptions = {
            animation: false,
            
			responsive: true,
			
			//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
			scaleBeginAtZero : true,
		
			//Boolean - Whether grid lines are shown across the chart
			scaleShowGridLines : false,
            
            scaleShowLabels: false,
            
            scaleLineColor: 'transparent',
		
			//String - Colour of the grid lines
			scaleGridLineColor : "rgba(0,0,0,.05)",
		
			//Number - Width of the grid lines
			scaleGridLineWidth : 1,
		
			//Boolean - Whether to show horizontal lines (except X axis)
			scaleShowHorizontalLines: false,
		
			//Boolean - Whether to show vertical lines (except Y axis)
			scaleShowVerticalLines: false,
		
			//Boolean - If there is a stroke on each bar
			barShowStroke : false,
		
			//Number - Pixel width of the bar stroke
			barStrokeWidth : 2,
		
			//Number - Spacing between each of the X value sets
			barValueSpacing : 5,
		
			//Number - Spacing between data sets within X values
			barDatasetSpacing : 1,
		
			//String - A legend template
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
		}, lineChartOptions = {
            animation: false,
            
			responsive: true,
            
            ///Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines : false,
            
            scaleShowLabels: false,

            //String - Colour of the grid lines
            scaleLineColor: 'transparent',
            
            scaleGridLineColor : "rgba(0,0,0,.05)",

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: false,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: false,

            //Boolean - Whether the line is curved between points
            bezierCurve : true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension : 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot : false,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke : false,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill : true,

            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        };
		return (
			<Dashboard fullHeight={true}>
                <Widget width={6} closeControl={true} refreshControl={true}>
					<WidgetHeader
						title="Average Growth Rate">
					</WidgetHeader>
					<WidgetText style={{paddingTop: 0}}>
                        <div style={{marginLeft: 10, marginRight: 50}}>
                            {this.state.chartToShow === 'bar' ? <BarChart data={barChartData} options={barChartOptions}/> : <LineChart data={lineChartData} options={lineChartOptions}/>}
                        </div>
					</WidgetText>
				</Widget>
                <StackedWidget width={3}>
                    <WidgetText centered={true}>
                        <span style={{display: 'block'}}>
                            <div>
                                <div style={{marginLeft:0, paddingLeft: 30}}>
                                    <div>
                                        <Sparklines 
                                            data={this.state.sparklineUsersData} 
                                            limit={20}
                                            height={70}
                                            width={300}>
                                            <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
                                        </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                    <WidgetText centered={true}>
                        <span style={{display: 'block'}}>
                            <div>
                                <div style={{marginLeft:0, paddingLeft: 30}}>
                                    <div>
                                        <Sparklines 
                                            data={this.state.sparklineCpuData} 
                                            limit={20}
                                            height={70}
                                            width={300}>
                                            <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
                                        </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
				</StackedWidget>
                <Widget width={3}>
					<WidgetText>
                        <List>
                            <ListItem
                            primaryText="Chart controls"
                            />
                        </List>
                        <Divider />
                        <List subheader="Main chart">
                            <ListItem primaryText="Bar" rightToggle={<Toggle ref='barToggle' defaultToggled={true} onToggle={this._enableBarChart} />} />
                            <ListItem primaryText="Line" rightToggle={<Toggle ref='lineToggle' onToggle={this._enableLineChart} />} />
                        </List>
                        <List subheader="CPU/RAM charts">
                            <ListItem primaryText="Fast speed" rightToggle={<Toggle ref='speedToggle' onToggle={this._setSpeed} />} 
                                />
                        </List>
                    </WidgetText>
				</Widget>
                <Widget width={5}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>ID</TableHeaderColumn>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Position</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableRowColumn>1</TableRowColumn>
                                <TableRowColumn>John Smith</TableRowColumn>
                                <TableRowColumn>CEO</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>2</TableRowColumn>
                                <TableRowColumn>Randal White</TableRowColumn>
                                <TableRowColumn>CTO</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>3</TableRowColumn>
                                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                <TableRowColumn>Developer</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>4</TableRowColumn>
                                <TableRowColumn>Steve Brown</TableRowColumn>
                                <TableRowColumn>Frontend</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>5</TableRowColumn>
                                <TableRowColumn>Lewis Smith</TableRowColumn>
                                <TableRowColumn>Manager</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Widget>
                <Widget width={4}>
					<WidgetText>
						<List subheader="Folders" insetSubheader={true}>
                            <ListItem
                                leftAvatar={<Avatar icon={<FileFolder />} />}
                                rightIcon={<ActionInfo />}
                                primaryText="Photos"
                                secondaryText="Jan 9, 2014"
                            />
                            <ListItem
                                leftAvatar={<Avatar icon={<FileFolder />} />}
                                rightIcon={<ActionInfo />}
                                primaryText="Work"
                                secondaryText="Jan 28, 2014"
                            />
                        </List>
                        <Divider inset={true} />
                        <List subheader="Files" insetSubheader={true}>
                            <ListItem
                                leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={Colors.yellow600} />}
                                rightIcon={<ActionInfo />}
                                primaryText="Kitchen remodel"
                                secondaryText="Jan 10, 2014"
                            />
                        </List>
					</WidgetText>
				</Widget>
                <StackedWidget width={3} style={this.context.muiTheme.widget.stacked}>
                    <WidgetText>
                        <span style={style.deviceInfo.wrapper}>
                            <div>
                                <div style={style.deviceInfo.container}>
                                    <DesktopMac style={style.deviceInfo.icon}/>
                                    <div>OS X</div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                    <WidgetText>
                        <span style={style.deviceInfo.wrapper}>
                            <div>
                                <div style={style.deviceInfo.container}>
                                    <DeveloperBoard style={style.deviceInfo.icon}/>
                                    <div>2.7 GHz</div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                    <WidgetText>
                        <span style={style.deviceInfo.wrapper}>
                            <div>
                                <div style={style.deviceInfo.container}>
                                    <Memory style={style.deviceInfo.icon}/>
                                    <div>32 GB</div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                    <WidgetText>
                        <span style={style.deviceInfo.wrapper}>
                            <div>
                                <div style={style.deviceInfo.container}>
                                    <Storage style={style.deviceInfo.icon}/>
                                    <div>1 TB</div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                    <WidgetText>
                        <span style={style.deviceInfo.wrapper}>
                            <div>
                                <div style={style.deviceInfo.container}>
                                    <Usb style={style.deviceInfo.icon}/>
                                    <div>USB Type-C</div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                </StackedWidget>
			</Dashboard>
			);
	}
    
    _enableBarChart = () => {
        if(this.refs.barToggle.isToggled()) {
            this.setState({chartToShow: 'bar'});
            this.refs.lineToggle.setToggled(false);
        } else {
            this.setState({chartToShow: 'line'});
            this.refs.lineToggle.setToggled(true);
        }
    }
    
    _enableLineChart = () => {
        if(this.refs.lineToggle.isToggled()) {
            this.setState({chartToShow: 'line'});
            this.refs.barToggle.setToggled(false);
        } else {
            this.setState({chartToShow: 'bar'});
            this.refs.barToggle.setToggled(true);
        }
    }
    
    _setSpeed = () => {
        if(this.refs.speedToggle.isToggled()) {
            this.setState({speed: 300});
        } else {
            this.setState({speed: 1000});
        }
    }
}

export default DashboardPage