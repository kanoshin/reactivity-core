import React from 'react'
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css!'
import Radium from 'radium'

class Dashboard extends React.Component {
	constructor() {
		super();
		this.styles = {
			cell: {
				paddingBottom: '10px'
			}
		};
	}
	render() {
	let grids = [[]], currentGridWidth = 0, currentGridIndex = 0,
		widgets = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
	widgets.forEach((widget) => {
		widget.props.width = !widget.props.width || widget.props.width > 12 ? 12 : widget.props.width;
		//if(currentGridWidth + widget.props.width > 12) {
		//	grids[++currentGridIndex] = [];
		//	currentGridWidth = 0;
		//}
		currentGridWidth += widget.props.width;
		grids[currentGridIndex].push(widget);
	});
	return (
		<div>
			{grids.map((grid) => { return (
				<Grid flexCells={true}>
					{grid.map((widget) => { return (
						<Cell style={this.styles.cell} size={widget.props.width + '/13'}>{widget}</Cell>
						); })}
				</Grid>
				); })}
		</div>
		);
	}
}

Dashboard = Radium(Dashboard);

export default Dashboard