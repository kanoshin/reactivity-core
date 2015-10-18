import React from 'react'
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css!'

class Dashboard extends React.Component {
	render() {
		return (
			<Grid>
				<Cell>1/3</Cell>
				<Cell>1/3</Cell>
				<Cell>1/3</Cell>
			</Grid>);
	}
}

export default Dashboard