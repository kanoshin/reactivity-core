import React from 'react'
import { AppBar, LeftNav, IconButton, Avatar, MenuItem as MenuItemOld, Styles } from 'material-ui'
import { MessageNav, Nav, NavMenuItem, NavBlock } from 'reactivity'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Message from 'material-ui/lib/svg-icons/communication/message';

@Radium
@Styles.ThemeDecorator(Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme))
class Layout extends React.Component {
	constructor() {
		super();
		this.styles = {
			appBar: {
				position: 'fixed',
				top: '0'
			},
			navBar: {
				marginTop: '65px'
			},
			workZone: {
				default: {
			    	marginTop: '88px',
    				marginLeft: '300px',
					marginRight: '35px'
				},
				wide: {
					marginLeft: '20px'
				}
			},
			rightBlock: {
				avatarWrapper: {
					display: 'inline-block',
					verticalAlign: 'top',
					paddingTop: '5px',
					paddingRight: '12px'
				},
				iconMenu: {
					verticalAlign: 'top'
				},
				icon: {
					fill: '#FFFFFF'
				}
			}
		};
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
							<IconButton onTouchTap={this._toggleMessageNav}> <Message style={this.styles.rightBlock.icon}  /></IconButton>
							<IconMenu style={this.styles.rightBlock.iconMenu} iconButtonElement={
								<IconButton > <MoreVertIcon style={this.styles.rightBlock.icon}  /></IconButton>
								}>
								<MenuItem primaryText="Settings" />
								<MenuItem primaryText="Sign out" />
							</IconMenu>
						</div>
					}
				style={this.styles.appBar}
				/>
			<Nav ref='nav'
				docked={true}
				style={this.styles.navBar}>
				<NavMenuItem route='/'>Dashboard</NavMenuItem>
				<NavBlock text='Charts'>
					<NavMenuItem route='/chartjs'>Chart.js</NavMenuItem>
				</NavBlock>
				<NavBlock text='Basic elements'>
					<NavMenuItem route='/textfields'>Text fields</NavMenuItem>
					<NavMenuItem route='/buttons'>Buttons</NavMenuItem>
					<NavMenuItem route='/sliders'>Sliders</NavMenuItem>
					<NavMenuItem route='/switchers'>Switchers</NavMenuItem>
				</NavBlock>
				<NavBlock text='Progress'>
					<NavMenuItem route='/progressBars'>Bars</NavMenuItem>
					<NavMenuItem route='/progressDecks'>Decks</NavMenuItem>
					<NavMenuItem route='/timer'>Timer</NavMenuItem>
				</NavBlock>
				<NavMenuItem route='/logins'>Login</NavMenuItem>
			</Nav>
			<MessageNav 
				ref={'messageNav'}
				openRight={true}
				style={this.styles.navBar} />
			<div style={Object.assign({}, this.styles.workZone.default, !this.state.menuOpen && this.styles.workZone.wide)}>{this.props.children}</div>
		</div>);
	}
	
	_toggleNav = () => {
		this.refs.nav.toggle();
		this.setState({menuOpen: !this.state.menuOpen});
		window.dispatchEvent(new Event('resize'));
	}
	
	_toggleMessageNav = () => {
		this.refs.messageNav.toggle();
	}
	
	static childContextTypes = {
    	location: React.PropTypes.object,
		history: React.PropTypes.object
 	}
  
  	getChildContext() {
    	return {
			location: this.props.location,
			history: this.props.history
		};
  	}
}

export default Layout