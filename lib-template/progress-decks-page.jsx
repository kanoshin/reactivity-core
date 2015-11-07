import React from 'react'
import { TextField, LinearProgress, CircularProgress } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'
import ProgressDeck from 'react-progress-deck'

class ProgressDeckPage extends React.Component {
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
		return <Grid>
					<Cell size='1/3'>
						<ProgressDeck
							imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
							description="Check in 5 different place in Yosemite"
							title="Yosemite Ninjia"
							size = {350}
							percentage = {0.5}
						/>
					</Cell>
					<Cell size='1/3'>
						<ProgressDeck
							imageUrl="https://c3.staticflickr.com/3/2917/14333867272_acc4372727_b.jpg"
							description="Check in 5 different place in Yosemite"
							title="Yosemite Ninjia"
							size = {350}
							percentage = {0.5}
						/>
					</Cell>
					<Cell size='1/3'>
					</Cell>
					<Cell size='1/3'>
						<ProgressDeck
							description="Check in 5 different place"
							title="Eating Healthy"
							size = {350}
							imageUrl="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-128.png"
							imageStyle="thumbnail"
							percentage = {0.5}
						/>
					</Cell>
					<Cell size='1/3'>
						<ProgressDeck
							description="Check in 5 different place"
							title="Eating Healthy"
							size = {350}
							imageUrl="https://cdn4.iconfinder.com/data/icons/ballicons-2-free/100/pencil-128.png"
							imageStyle="thumbnail"
							percentage = {0.5}
						/>
					</Cell>
					<Cell size='1/3'>
					</Cell>
					<Cell size='1/3'>
						<ProgressDeck
							description="Check in 5 different place in canada"
							title="Monthly Hiking"
							size = {350}
							progressBackgroundColor = "#ffebee"
							progressForegroundColor = "#ef9a9a"
							percentage = {0.5}
						/>
					</Cell>
					<Cell size='1/3'>
						<ProgressDeck
							description="Check in 5 different place in canada"
							title="Monthly Hiking"
							size = {350}
							progressBackgroundColor = "#ffebee"
							progressForegroundColor = "#ef9a9a"
							percentage = {0.5}
						/>
					</Cell>
				</Grid>
	}
	
	componentWillUnmount() {
		clearInterval(this.setProgressId);
	}
}

export default ProgressDeckPage