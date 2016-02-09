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

class DashboardPage extends React.Component {
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
                                60, 88, 99, 55, 33, 88, 120]
        };
        this.sparklineInterval = window.setInterval(() => {
            let newUsersValues = this.state.sparklineUsersData.slice();
            let last = newUsersValues.shift();
            newUsersValues.push(last);
            let newCpuValues = this.state.sparklineCpuData.slice();
            last = newCpuValues.shift();
            newCpuValues.push(last);
            this.setState({sparklineUsersData: newUsersValues, sparklineCpuData: newCpuValues});
        }, 1000);
	}
    
    componentWillUnmount() {
        window.clearInterval(this.sparklineInterval);
    }

	render() {
        let BarChart = ChartJs.Bar;
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
		};
		return (
			<Dashboard fullHeight={true}>
                <Widget width={6} closeControl={true} refreshControl={true}>
					<WidgetHeader
						title="Average Growth Rate">
					</WidgetHeader>
					<WidgetText style={{paddingTop: 0}}>
                        <div style={{marginLeft: 10, marginRight: 50}}>
                            <BarChart data={barChartData} options={barChartOptions}/>
                        </div>
					</WidgetText>
				</Widget>
                <StackedWidget width={3}>
                    <WidgetText>
                        <span style={{display: 'block'}}>
                            <div>
                                <div style={{marginLeft:0, paddingLeft: 30}}>
                                    <div>
                                        <Sparklines 
                                            data={this.state.sparklineUsersData} 
                                            limit={10}>
                                            <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
                                        </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </WidgetText>
                    <WidgetText>
                        <span style={{display: 'block'}}>
                            <div>
                                <div style={{marginLeft:0, paddingLeft: 30}}>
                                    <div>
                                        <Sparklines 
                                            data={this.state.sparklineCpuData} 
                                            limit={10}>
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
                            primaryText="When calls and notifications arrive"
                            secondaryText="Always interrupt"
                            />
                        </List>
                        <Divider />
                        <List subheader="Priority interruptions">
                            <ListItem primaryText="Events and reminders" rightToggle={<Toggle />} />
                            <ListItem primaryText="Calls" rightToggle={<Toggle />} />
                            <ListItem primaryText="Messages" rightToggle={<Toggle />} />
                        </List>
                    </WidgetText>
				</Widget>
                <Widget width={3}>
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
                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={Colors.blue500} />}
                                rightIcon={<ActionInfo />}
                                primaryText="Vacation itinerary"
                                secondaryText="Jan 20, 2014"
                            />
                            <ListItem
                                leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={Colors.yellow600} />}
                                rightIcon={<ActionInfo />}
                                primaryText="Kitchen remodel"
                                secondaryText="Jan 10, 2014"
                            />
                            </List>
					</WidgetText>
				</Widget>
                <Cell size={'1/2'}>
                    <Dashboard fullHeight={true}>
                        <Widget width={6} style={{backgroundColor: Colors.lightGreen400}}>
                            <WidgetText>
                                <span style={{display: 'block'}}>
                                    <div>
                                        <div style={{marginLeft:0, paddingLeft: 30}}>
                                            <DesktopMac style={{position: 'absolute', top: 10, left: 10}}/>
                                            <div>OS X</div>
                                        </div>
                                    </div>
                                </span>
                            </WidgetText>
                        </Widget>
                        <Widget width={6} style={{backgroundColor: Colors.lightGreen400}}>
                            <WidgetText>
                                <span style={{display: 'block'}}>
                                    <div>
                                        <div style={{marginLeft:0, paddingLeft: 30}}>
                                            <DeveloperBoard style={{position: 'absolute', top: 10, left: 10}}/>
                                            <div>2.7 GHz</div>
                                        </div>
                                    </div>
                                </span>
                            </WidgetText>
                        </Widget>
                        <Widget width={6} style={{backgroundColor: Colors.lightGreen400}}>
                            <WidgetText>
                                <span style={{display: 'block'}}>
                                    <div>
                                        <div style={{marginLeft:0, paddingLeft: 30}}>
                                            <Memory style={{position: 'absolute', top: 10, left: 10}}/>
                                            <div>32 GB</div>
                                        </div>
                                    </div>
                                </span>
                            </WidgetText>
                        </Widget>
                        <Widget width={6} style={{backgroundColor: Colors.lightGreen400}}>
                            <WidgetText>
                                <span style={{display: 'block'}}>
                                    <div>
                                        <div style={{marginLeft:0, paddingLeft: 30}}>
                                            <Storage style={{position: 'absolute', top: 10, left: 10}}/>
                                            <div>1 TB</div>
                                        </div>
                                    </div>
                                </span>
                            </WidgetText>
                        </Widget>
                    </Dashboard>
                </Cell>
                <Cell size={'1/2'}>
                    <Dashboard fullHeight={true}>
                        <Widget width={5}>
                            <WidgetText>
                                <span style={{display: 'block'}}>
                                    <div>
                                        <div style={{marginLeft:0, paddingLeft: 30}}>
                                            <div>
                                                <Sparklines 
                                                    data={this.state.sparklineUsersData} 
                                                    limit={10}>
                                                    <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
                                                </Sparklines>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </WidgetText>
                            <WidgetText style={{textAlign: 'center', paddingTop: 0}}>
                                Requests per second
                            </WidgetText>
                        </Widget>
                        <Widget width={5}>
                            <WidgetText>
                                <span style={{display: 'block'}}>
                                    <div>
                                        <div style={{marginLeft:0, paddingLeft: 30}}>
                                            <div>
                                                <Sparklines 
                                                    data={this.state.sparklineCpuData} 
                                                    limit={10}>
                                                    <SparklinesLine style={{ stroke: "none", fill: "#8e44af", fillOpacity: "1" }}/>
                                                </Sparklines>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </WidgetText>
                            <WidgetText style={{textAlign: 'center', paddingTop: 0}}>
                                CPU usage
                            </WidgetText>
                        </Widget>
                    </Dashboard>
                </Cell>
			</Dashboard>
			);
	}
}

export default DashboardPage