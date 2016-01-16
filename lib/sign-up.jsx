import React from 'react'
import Radium from 'radium'
import { Card, CardTitle, TextField, Checkbox, RaisedButton } from 'material-ui'

@Radium
class SignUp extends React.Component {
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
			bottomBlock: {
				marginTop: '20px',
                textAlign: 'center' 
			}
		};
	
	}

	render() {
		return (
				<Card style={this.styles.card}>
					<div style={this.styles.cardTitle.header}>
						<span style={this.styles.cardTitle.text}>Sign up</span>
					</div>
					<div style={this.styles.cardContent}>
						<TextField
							hintText="Username"
							style={this.styles.field}/>
						<TextField
							hintText="Password"
							style={this.styles.field} />
                        <TextField
							hintText="Email"
							style={this.styles.field} />    
						<div style={this.styles.bottomBlock}>							
							<RaisedButton 
								label="Sign up"
								secondary={true}
								style={this.styles.button}/>
						</div>
					</div>
				</Card>
			);
	}
}

export default SignUp