import React from 'react'
import Radium from 'radium'
import { Login, Login2, Dashboard } from 'reactivity'

@Radium
class LoginsPage extends React.Component {
	constructor() {
		super();
		this.styles = {
			loginWrapper:{
				display: 'inline-block',
				marginRight: '20px'
			}
		};
	}

	render() {
		return (<div>
					<div style={this.styles.loginWrapper}>
						<Login></Login>
					</div>
					<div style={this.styles.loginWrapper}>
						<Login2></Login2>
					</div>
				</div>);
	}
}

export default LoginsPage