import React from 'react'
import Radium from 'radium'
import { Card, CardTitle, TextField, Checkbox, RaisedButton } from 'material-ui'

class Login extends React.Component {
	constructor() {
		super();
		this.styles = {
			card: {
				width: '400px'
			},
			cardTitle: {
				borderBottom: '1px solid rgba(0,0,0,.12)'
			},
			cardContent: {
				margin: '20px 50px 30px 50px'
			},
			field: {
				width: '100%',
				display: 'block'
			},
			buttonWrapper: {
				margin: '35px 20px'
			},
			button: {
				width: '100%'
			}
		};
	
	}

	render() {
		return (
				<Card style={this.styles.card}>
					<CardTitle title="Login" style={this.styles.cardTitle}/>
					<div style={this.styles.cardContent}>
						<TextField
							hintText="Username"
							floatingLabelText="Username" 
							style={this.styles.field}/>
						<TextField
							hintText="Password"
							floatingLabelText="Password"
							style={this.styles.field} />
						<div style={this.styles.buttonWrapper}>
							<RaisedButton 
								label="Log in"
								secondary={true}
								style={this.styles.button}/>
						</div>
						<Checkbox label="Stay logged in"/>
					</div>
				</Card>
			);
	}
}

Login = Radium(Login);

export default Login