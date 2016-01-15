import React from 'react'
import { IconButton, RaisedButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import { 
	Dashboard,
	Widget,
	WidgetText,
	WidgetHeader,
	WidgetControls,
	WidgetCloseControl,
	WidgetExpandControl,
	WidgetRefreshControl,
	WidgetActions
} from 'reactivity'

import {
	Table,
	TableBody,
	TableHeader,
	TableFooter,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
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
				<Widget width={12} closeControl={true}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle">
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6} closeControl={true}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle">
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6} initiallyExpanded={true} closeControl={true} onRefresh={()=>{console.log('refresh')}}>
					<WidgetHeader
						title="Title">
					</WidgetHeader>
					<WidgetText expandable={true}>
						<Table
                            height={this.state.tableSettings.height}
                            fixedHeader={this.state.tableSettings.fixedHeader}
                            fixedFooter={this.state.tableSettings.fixedFooter}
                            selectable={this.state.tableSettings.selectable}
                            multiSelectable={this.state.tableSettings.multiSelectable}
                            onRowSelection={this._onRowSelection}>
                            <TableHeader enableSelectAll={this.state.tableSettings.enableSelectAll}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="3">
                                        Common Header
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
                                    <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                deselectOnClickaway={this.state.tableSettings.deselectOnClickaway}
                                showRowHover={this.state.tableSettings.showRowHover}
                                stripedRows={this.state.tableSettings.stripedRows}>
                                <TableRow selected={true}>
                                    <TableRowColumn>1</TableRowColumn>
                                    <TableRowColumn>John Smith</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>2</TableRowColumn>
                                    <TableRowColumn>Randal White</TableRowColumn>
                                    <TableRowColumn>Unemployed</TableRowColumn>
                                </TableRow>
                                <TableRow selected={true}>
                                    <TableRowColumn>3</TableRowColumn>
                                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>4</TableRowColumn>
                                    <TableRowColumn>Steve Brown</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>Joyce Whitten</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>6</TableRowColumn>
                                    <TableRowColumn>Samuel Roberts</TableRowColumn>
                                    <TableRowColumn>Unemployed</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>7</TableRowColumn>
                                    <TableRowColumn>Adam Moore</TableRowColumn>
                                    <TableRowColumn>Employed</TableRowColumn>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                                        Common Footer
                                    </TableRowColumn>
                                </TableRow>
                            </TableFooter>
                        </Table>
					</WidgetText>
				</Widget>
				<Widget width={9} controls={[<WidgetCloseControl/>]}>
					<WidgetActions>
						<RaisedButton label="Action1" primary={true}/>
    					<RaisedButton label="Action2" secondary={true}/>
					</WidgetActions>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={3}>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
			</Dashboard>
			);
	}
}

export default DashboardPage