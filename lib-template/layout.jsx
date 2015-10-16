import React from 'react'
import { AppBar, LeftNav } from 'material-ui'
import Radium from 'radium'

let menuItems = [
    { route: 'dashboard', text: 'Dashboard' },
    { route: 'charts', text: 'Charts' },
    { route: 'forms', text: 'Forms' }
  ];

class Layout extends React.Component {
	constructor() {
		super();
		this.styles = {
			navBar: {
				marginTop: '65px',
				zIndex: 0
			}
		};
	}

	render() {
		return (
		<div>
			<AppBar title='Reactivity' />
			<LeftNav ref="leftNav"
				docked={true}
				menuItems={menuItems}
				style={this.styles.navBar} />
			{this.props.children}
		</div>);
	}
	
	componentDidMount() {
		//this.refs.leftNav.open();
	}
}

Layout = Radium(Layout);

export default Layout