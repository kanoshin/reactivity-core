import React from 'react'
import { FlatButton, FontIcon } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

class FormsPage extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	}
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Flat buttons' />
					<WidgetText>
						<Grid>
							<Cell size='1/3'>
								<FlatButton label="Default" />
							</Cell>
							<Cell size='1/3'>
								<FlatButton label="Primary" primary={true} />
							</Cell>
							<Cell size='1/3'>
								<FlatButton label="Secondary" secondary={true} />
							</Cell>
							<Cell size='1/3'>
								<FlatButton primary={true} label="Choose an Image">
									<input type="file" id="imageButton" style={{display: 'none'}}></input>
								</FlatButton>
							</Cell>
							<Cell size='1/3'>
								<FlatButton secondary={true} label="Go home">
									<FontIcon className="material-icons" style={{float: 'left', verticalAlign: ''}}>home</FontIcon>
								</FlatButton>
							</Cell>
							<Cell size='1/3'>
								<FlatButton label="Disabled" disabled={true} />
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default FormsPage