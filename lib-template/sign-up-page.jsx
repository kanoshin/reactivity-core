import React from 'react'
import Radium from 'radium'
import { Card, CardTitle, TextField, Checkbox, RaisedButton } from 'material-ui'
import { SignUp } from 'reactivity'

@Radium
class SignUpPage extends React.Component {
    constructor() {
		super();
		this.state = {
		};
        this.styles = {
            wrapper: {
                flex: 1,
                backgroundImage: 'url(/lib-template/content/mountain.png)',
                display: 'flex',
            },
            cardWrapper: {
                marginLeft: 'auto',
                marginRight: 'auto',
                alignSelf: 'center'
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
                <div style={this.styles.cardWrapper}>
                    <SignUp/>
                </div>    
            </div>
        );
	}
}

export default SignUpPage