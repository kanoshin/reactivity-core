import React from 'react'
import { FlatButton, FontIcon } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

let styles = {
	buttonWithIcon: {
		padding: '0px 16px 0px 8px'
	},
	icon: {
		verticalAlign: 'top',
    	padding: '5px 0px 0px 16px',
		float: 'left'
	},
	imageInput: {
		cursor: 'pointer',
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        width: '100%',
        opacity: '0',
		overflow: 'hidden',
		paddingLeft: '100%'
	}
};

class FormsPage extends React.Component {
	constructor(props, context) {
		super();
		styles.icon.color = context.muiTheme.floatingActionButton.secondaryColor;
	}
	
	static contextTypes = {
  		muiTheme: React.PropTypes.object,
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
									<input type="file" id="imageButton" style={styles.imageInput}></input>
								</FlatButton>
							</Cell>
							<Cell size='1/3'>
								<FlatButton labelStyle={styles.buttonWithIcon} secondary={true} label="Go home">
									<FontIcon style={styles.icon} className="material-icons">home</FontIcon>
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