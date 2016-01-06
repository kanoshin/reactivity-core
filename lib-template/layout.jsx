import React from 'react'
import { AppBar, LeftNav, IconButton, Avatar, MenuItem as MenuItemOld, Styles, Badge, List, ListItem, Divider } from 'material-ui'
import { MessageNav, Nav, NavMenuItem, NavBlock } from 'reactivity'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Message from 'material-ui/lib/svg-icons/communication/message';

const {Colors} = Styles;

class LayoutWrapper extends React.Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object,
        location: React.PropTypes.object,
        history: React.PropTypes.object,
        changeTheme: React.PropTypes.func
	}
    
    getChildContext() {
        return {
            muiTheme: this.state.theme,
            location: this.props.location,
			history: this.props.history,
            changeTheme: (themeName) => {
                this.setState({
                    theme: this.themes[themeName]
                });
            }
        };
    }
    
    constructor() {
        super();
        this.themes = {
            light: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme),
            dark: Styles.ThemeManager.getMuiTheme(Styles.DarkRawTheme)
        };
        this.state = {
            theme: this.themes.light
        };
    }
    
    render() {
        return (<Layout>{this.props.children}</Layout>);
    }
}

@Radium
class Layout extends React.Component {
	constructor() {
		super();
		this.styles = {
			appBar: {
				position: 'fixed',
				top: '0'
			},
			navBar: {
				marginTop: '64px'
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
                badge: {
                    top: -2, 
                    right: -2
                },
                badgeWrapper: {
                    padding: 0
                }
			}
		};
		this.state = { menuOpen: true, messageMenuOpen: false };
	}

	render() {
        let iconButtonElement = (
        <IconButton
            touch={true}
            tooltip="more"
            tooltipPosition="bottom-left">
            <MoreVertIcon color={Colors.grey400} />
        </IconButton>
        );

        let rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem>Reply</MenuItem>
            <MenuItem>Forward</MenuItem>
            <MenuItem>Delete</MenuItem>
        </IconMenu>
        );
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
                            <Badge badgeContent={5} primary={true} style={this.styles.rightBlock.badgeWrapper} badgeStyle={this.styles.rightBlock.badge}>
                                <IconButton onTouchTap={this._toggleMessageNav}>
                                    <Message color={Colors.white}  />
                                </IconButton>
                            </Badge>
							<IconMenu style={this.styles.rightBlock.iconMenu} iconButtonElement={
								<IconButton > <MoreVertIcon color={Colors.white}  /></IconButton>
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
				style={this.styles.navBar}
                open={this.state.menuOpen}>
				<NavMenuItem route='/'>Dashboard</NavMenuItem>
				<NavBlock text='Charts'>
					<NavMenuItem route='/chartjs'>Chart.js</NavMenuItem>
				</NavBlock>
				<NavBlock text='Basic elements'>
					<NavMenuItem route='/textfields'>Text fields</NavMenuItem>
					<NavMenuItem route='/buttons'>Buttons</NavMenuItem>
					<NavMenuItem route='/sliders'>Sliders</NavMenuItem>
					<NavMenuItem route='/switchers'>Switchers</NavMenuItem>
					<NavMenuItem route='/popovers'>Popovers</NavMenuItem>
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
				style={this.styles.navBar} 
                open={this.state.messageMenuOpen}>
                <List subheader="Today">
                    <ListItem
                        leftAvatar={<Avatar src="lib-template/content/ok-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Brendan Lim"
                        secondaryText={
                        <p>
                            <span style={{color: Colors.darkBlack}}>Brunch this weekend?</span><br/>
                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="lib-template/content/kolage-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="me, Scott, Jennifer"
                        secondaryText={
                        <p>
                            <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="lib-template/content/uxceo-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Grace Ng"
                        secondaryText={
                        <p>
                            <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
                            Do you have any Paris recs? Have you ever been?
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="lib-template/content/kerem-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Kerem Suer"
                        secondaryText={
                        <p>
                            <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
                            Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="lib-template/content/raquelromanp-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Raquel Parrado"
                        secondaryText={
                        <p>
                            <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
                            We should eat this: grated squash. Corn and tomatillo tacos.
                        </p>
                        }
                        secondaryTextLines={2} />
                    </List>
            </MessageNav>
			<div style={Object.assign({}, this.styles.workZone.default, !this.state.menuOpen && this.styles.workZone.wide)}>{this.props.children}</div>
		</div>);
	}
	
	_toggleNav = () => {
		this.setState({menuOpen: !this.state.menuOpen});
		window.dispatchEvent(new Event('resize'));
	}
	
	_toggleMessageNav = () => {
		this.setState({messageMenuOpen: !this.state.messageMenuOpen});
	}
}

export default LayoutWrapper