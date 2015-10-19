import React from 'react'
import { Grid } from 'react-flexr';
import 'react-flexr/styles.css!'
import Radium from 'radium'
import { Widget } from 'reactivity'

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<Grid>
					{React.Children.map(this.props.children, (child) => {
						if (child.type === Widget)
							return React.addons.cloneWithProps(child, {
									fullHeight: this.props.fullHeight
								});
						else
							return child;
						})}
				</Grid>
			</div>
			);
	}
}

Dashboard = Radium(Dashboard);

export default Dashboard