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
    Cell
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
    Checkbox,
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
        };  
	}

	render() {
		return (
			<Dashboard fullHeight={true}>
                <Widget width={9} closeControl={true} refreshControl={true}>
					<WidgetHeader
						title="Growth Rate">
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
			</Dashboard>
			);
	}
}

export default DashboardPage