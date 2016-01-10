import React from 'react'
import Radium from 'radium'
import { Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetTitle } from 'reactivity'

@Radium
class TablePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: false,
            height: '350px',
        };
	}
	
	render() {		
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Tables' />
					<WidgetText>
						<Table
                            height={this.state.height}
                            fixedHeader={this.state.fixedHeader}
                            fixedFooter={this.state.fixedFooter}
                            selectable={this.state.selectable}
                            multiSelectable={this.state.multiSelectable}
                            onRowSelection={this._onRowSelection}>
                            <TableHeader enableSelectAll={this.state.enableSelectAll}>
                                <TableRow>
                                    <TableHeaderColumn colSpan="3" style={{textAlign: 'center'}}>
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
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                showRowHover={this.state.showRowHover}
                                stripedRows={this.state.stripedRows}>
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
			</Dashboard>
	}
}

export default TablePage