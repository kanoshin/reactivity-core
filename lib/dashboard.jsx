import React from 'react'
import { Grid } from 'react-flexr';
import 'react-flexr/styles.css!'
import Radium from 'radium'
import { Widget } from 'reactivity'

class Dashboard extends React.Component {
	render() {
		let widgets = React.Children.map(this.props.children, (child) => {
			if (child.type === Widget) {
				return React.cloneElement(child, {
						fullHeight: this.props.fullHeight
					});
			}
			else {
				return child;
			}
		});
		return (
			<div>
				<Grid>
					{widgets}
				</Grid>
			</div>
			);
	}
}

Dashboard = Radium(Dashboard);

export default Dashboard