import React from 'react'
import Radium from 'radium'
import { Card, CardTitle, TextField, Checkbox, RaisedButton } from 'material-ui'

@Radium
class LoginPage extends React.Component {
    constructor() {
		super();
		this.state = {
		};
        this.styles = {
            wrapper: {
                flex: 1,
                backgroundImage: 'url(/lib-template/content/wooden-background.jpg)'
            },
            card: {
				width: '600px',
                margin: '0 auto',
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
            <div style={this.styles.wrapper}>
                <div style={{margin: '300 0 0 0'}}>
                    <Card style={this.styles.card}>
                        <div style={this.styles.cardContent}>
                            <TextField
                                hintText="Username"
                                floatingLabelText="Username" 
                                style={this.styles.field}/>
                            <TextField
                                hintText="Password"
                                floatingLabelText="Password"
                                style={this.styles.field}
                                type={'password'} />
                            <div style={this.styles.buttonWrapper}>
                                <RaisedButton 
                                    label="Log in"
                                    secondary={true}
                                    style={this.styles.button}/>
                            </div>
                            <Checkbox label="Stay logged in"/>
                        </div>
                    </Card>
                </div>
            </div>
        );
	}
}

export default LoginPage