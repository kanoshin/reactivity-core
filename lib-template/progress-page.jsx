import React from 'react'
import { TextField, LinearProgress, CircularProgress } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

class ProgressPage extends React.Component {
	constructor() {
		super();
		this.state = {
			progressValue: 0
		};

		this.setProgressId = setInterval(() => {
			if(this.state.progressValue < 100){
				let value = this.state.progressValue + (Math.random() * 20);
				if(value > 100) {
					value = 100;
				}
				this.setState({progressValue: value});
			} 
			else {
				this.setState({progressValue: 0});
			}
		}, 1000);
	}
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Linear Progress' />
					<WidgetText>
						<Grid>
							<Cell size='3/3'>
								<h4>Determinate</h4>
								<LinearProgress mode="determinate" value={this.state.progressValue} />
							</Cell>
							<Cell size='3/3'>
								<h4>Indeterminate</h4>
								<LinearProgress mode="indeterminate"/>
							</Cell>	
						</Grid>
					</WidgetText>
					<WidgetTitle title='Circular Progress' />
					<WidgetText>
						<Grid>
							<Cell size='3/3'>
								<h4>Determinate</h4>
								<CircularProgress mode="determinate" value={this.state.progressValue} />
								<CircularProgress mode="determinate" value={this.state.progressValue} size={1.5} />
								<CircularProgress mode="determinate" value={this.state.progressValue} size={2} />
							</Cell>
							<Cell size='3/3'>
								<h4>Indeterminate</h4>
								<CircularProgress mode="indeterminate" />
								<CircularProgress mode="indeterminate" size={1.5} />
								<CircularProgress mode="indeterminate" size={2} />
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
	
	componentWillUnmount() {
		clearInterval(this.setProgressId);
	}
}

export default ProgressPage