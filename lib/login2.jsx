import React from 'react'
import Radium from 'radium'
import { Card, CardTitle, TextField, Checkbox, RaisedButton } from 'material-ui'

class Login2 extends React.Component {
	constructor() {
		super();
		this.styles = {
			card: {
				width: '400px'
			},
			cardTitle: {
				header: {
					height: '90px',
					backgroundColor: '#00bcd4',
					didFlip:'true',
					padding: '16px', 
					position:'relative',
				},
				text: {
					didFlip: 'true',
					fontSize: '24px', 
					color:'#ffffff',
					display: 'block',
					lineHeight: '36px',
					marginLeft: '30px',
					marginTop: '60px'
				}
			},
			cardContent: {
				margin: '30px 50px 30px 50px'
			},
			field: {
				width: '100%',
				display: 'block',
				marginTop: '20px'
			},
			buttonWrapper: {
				margin: '35px 20px'
			},
			button: {
				marginLeft: '82px',
				width: '30px'
			},
			bottomBlock: {
				marginTop: '20px' 
			}
		};
	
	}

	render() {
		return (
				<Card style={this.styles.card}>
					<div style={this.styles.cardTitle.header}>
						<span style={this.styles.cardTitle.text}>Welcome Back!</span>
					</div>
					<div style={this.styles.cardContent}>
						<TextField
							hintText="Username"
							style={this.styles.field}/>
						<TextField
							hintText="Password"
							style={this.styles.field} />
						<div style={this.styles.bottomBlock}>
								<a href='#'>Forgot Password?</a>
								<RaisedButton 
									label="Log in"
									secondary={true}
									style={this.styles.button}/>
						</div>
					</div>
				</Card>
			);
	}
}

Login2 = Radium(Login2);

export default Login2