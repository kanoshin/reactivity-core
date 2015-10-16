import React from 'react'
import { AppBar, LeftNav, IconButton } from 'material-ui'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'

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
		this._toggleNav = this._toggleNav.bind(this);
		this.state = {menuButton: <NavigationClose />};
	}

	render() {
		return (
		<div>
			<AppBar ref='appBar' 
			title='Reactivity' 
			onLeftIconButtonTouchTap={this._toggleNav} 
			iconElementLeft={<IconButton onTouchTap={this._toggleNav}>{this.state.menuButton}</IconButton>} />
			<LeftNav ref='nav'
				docked={true}
				menuItems={menuItems}
				style={this.styles.navBar} />
			{this.props.children}
		</div>);
	}
	
	componentDidMount() {
		//this.refs.appBar.onLeftIconButtonTouchTap(() => this.refs.leftNav.toggle());
	}
	
	_toggleNav() {
		this.refs.nav.toggle();
		let menuButton = this.refs.nav.state.open ? <Menu /> : <NavigationClose />;
		this.setState({menuButton: menuButton});
	}
}

Layout = Radium(Layout);

export default Layout