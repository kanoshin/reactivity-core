import React from 'react'
import { AppBar, LeftNav, IconButton, Avatar } from 'material-ui'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

let menuItems = [
    { route: '/', text: 'Dashboard' },
    { route: '/charts', text: 'Charts' },
    { route: '/forms', text: 'Forms' }
  ];

class Layout extends React.Component {
	constructor() {
		super();
		this.styles = {
			navBar: {
				marginTop: '65px'
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
			rightBlock: {
				avatarWrapper: {
					display: 'inline-block',
					verticalAlign: 'top',
					paddingTop: '5px'
				},
				iconMenu: {
					verticalAlign: 'top'
				},
				moreVertIcon: {
					fill: '#FFFFFF'
				}
			}
		};
		this._toggleNav = this._toggleNav.bind(this);
		this._changeLocation = this._changeLocation.bind(this);
		this._currentNavIndex = this._currentNavIndex.bind(this);
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
						<div>
							<div style={this.styles.rightBlock.avatarWrapper}>
								<Avatar src='lib-template/content/avatar.jpg' />
							</div>
							<IconMenu style={this.styles.rightBlock.iconMenu} iconButtonElement={
								<IconButton > <MoreVertIcon style={this.styles.rightBlock.moreVertIcon}  /></IconButton>
								}>
								<MenuItem primaryText="Settings" />
								<MenuItem primaryText="Sign out" />
							</IconMenu>
						</div>
					}
				/>
			<LeftNav ref='nav'
				docked={true}
				menuItems={menuItems}
				style={this.styles.navBar}
				onChange={this._changeLocation}
				selectedIndex={this._currentNavIndex()} />
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
	
	_changeLocation(e, i, item) {
		this.props.history.replaceState({}, item.route)
	}
	
	_currentNavIndex() {
		let currentPath = this.props.location.pathname;
		return menuItems.findIndex((item) => currentPath === item.route);
	}
}

Layout = Radium(Layout);

export default Layout