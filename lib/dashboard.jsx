import React from 'react'
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css!'

class Dashboard extends React.Component {
	render() {
	let grids = [[]], currentGridWidth = 0, currentGridIndex = 0,
		widgets = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
	widgets.forEach((widget) => {
		widget.props.width = !widget.props.width || widget.props.width > 12 ? 12 : widget.props.width;
		if(currentGridWidth + widget.props.width > 12) {
			grids[++currentGridIndex] = [];
			currentGridWidth = 0;
		}
		currentGridWidth += widget.props.width;
		grids[currentGridIndex].push(widget);
	});
	return (
		<div>
			{grids.map((grid) => { return (
				<Grid>
					{grid.map((widget) => { return (
						<Cell>{widget}</Cell>
						); })}
				</Grid>
				); })}
		</div>
		);
	}
}

export default Dashboard