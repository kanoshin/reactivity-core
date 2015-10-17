import React from 'react'
import { AppBar, LeftNav, IconButton } from 'material-ui'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

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
			},
			workZone: {
				default: {
			    	marginTop: '20px',
    				marginLeft: '300px',
					marginRight: '20px'
				},
				wide: {
					marginLeft: '20px'
				}
			},
			moreVertIcon: {
				fill: '#FFFFFF'
			}
		};
		this._toggleNav = this._toggleNav.bind(this);
		this.state = { menuOpen: true };
	}

	render() {
		return (
		<div>
			<AppBar ref='appBar' 
			title='Reactivity' 
			onLeftIconButtonTouchTap={this._toggleNav} 
			iconElementLeft={<IconButton onTouchTap={this._toggleNav}>{this.state.menuOpen ? <NavigationClose /> : <Menu />}</IconButton>} 
			iconElementRight={
					<IconMenu iconButtonElement={
						<IconButton > <MoreVertIcon style={this.styles.moreVertIcon}  /></IconButton>
					}>
						<MenuItem primaryText="Settings" />
						<MenuItem primaryText="Sign out" />
					</IconMenu>
				}
			/>
			<LeftNav ref='nav'
				docked={true}
				menuItems={menuItems}
				style={this.styles.navBar} />
			<div style={Object.assign({}, this.styles.workZone.default, !this.state.menuOpen && this.styles.workZone.wide)}>{this.props.children}</div>
		</div>);
	}
	
	componentDidMount() {
		//this.refs.appBar.onLeftIconButtonTouchTap(() => this.refs.leftNav.toggle());
	}
	
	_toggleNav() {
		this.refs.nav.toggle();
		this.setState({menuOpen: !this.refs.nav.state.open});
	}
}

Layout = Radium(Layout);

export default Layout