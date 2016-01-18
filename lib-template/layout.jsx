import React from 'react'
import { AppBar, LeftNav, IconButton, Avatar, MenuItem as MenuItemOld, Styles, Badge, List, ListItem, Divider } from 'material-ui'
import { CustomNav, Nav, NavMenuItem, NavBlock } from 'reactivity'
import ScrollArea from 'react-scrollbar'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Message from 'material-ui/lib/svg-icons/communication/message';
import Settings from 'material-ui/lib/svg-icons/action/settings';
import Transitions from 'material-ui/lib/styles/transitions';
import ContentCopy from 'material-ui/lib/svg-icons/content/content-copy';
import Timeline from 'material-ui/lib/svg-icons/action/timeline'
import Dashboard from 'material-ui/lib/svg-icons/action/dashboard'
import Code from 'material-ui/lib/svg-icons/action/code'
import Image from 'material-ui/lib/svg-icons/image/image'
import {Categories as IconCategories} from 'lib-template/icons.js'

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
                let theme = this.themes[themeName];
                this.setState({
                    theme: theme
                });
            }
        };
    }
    
    constructor() {
        super();
        this.themes = {
            light: Object.assign(Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme), {
                layout: {
                    backgroundColor: '#ffffff',
                    backgroundImage: 'none'
                },
                widget: {
                    header: {
                        titleColor: Colors.darkBlack,
                        subtitleColor: Colors.lightBlack
                    },
                    title: {
                        titleColor: Colors.darkBlack,
                        subtitleColor: Colors.lightBlack
                    },
                    control: {
                        color: Colors.darkBlack
                    }
                },
                list: {
                    subheader: {
                        color: Colors.darkBlack
                    }
                },
                nav: {
                    icon: {
                        color: Colors.grey600
                    }
                },
                messageListItem: {
                    span: {
                        color: Colors.darkBlack
                    },
                    text: {
                        color: Colors.lightBlack
                    }
                }
            }),
            dark: Object.assign(Styles.ThemeManager.getMuiTheme(Styles.DarkRawTheme), {
                layout: {
                    backgroundColor: 'rgb(146, 146, 146)',
                    backgroundImage: 'none'
                },
                widget: {
                    header: {
                        titleColor: Colors.white,
                        subtitleColor: Colors.grey100
                    },
                    title: {
                        titleColor: Colors.white,
                        subtitleColor: Colors.grey100
                    },
                    control: {
                        color: Colors.white
                    }
                },
                list: {
                    subheader: {
                        color: Colors.white
                    }
                },
                nav: {
                    icon: {
                        color: Colors.white
                    }
                },
                messageListItem: {
                    span: {
                        color: Colors.fullWhite
                    },
                    text: {
                        color: Colors.darkWhite
                    }
                }
            }),
            darkBackground: Object.assign(Styles.ThemeManager.getMuiTheme(Styles.DarkRawTheme), {
                layout: {
                    backgroundImage: 'url("/lib-template/content/wooden-background.jpg")',
                    backgroundSize: '100%'
                },
                widget: {
                    header: {
                        titleColor: Colors.white,
                        subtitleColor: Colors.grey100
                    },
                    title: {
                        titleColor: Colors.white,
                        subtitleColor: Colors.grey100
                    },
                    control: {
                        color: Colors.white
                    }
                },
                list: {
                    subheader: {
                        color: Colors.white
                    }
                },
                nav: {
                    icon: {
                        color: Colors.white
                    }
                },
                messageListItem: {
                    span: {
                        color: Colors.fullWhite
                    },
                    text: {
                        color: Colors.darkWhite
                    }
                }
            })
        };
        this.themes.dark.appBar.textColor = '#ffffff';
        this.themes.darkBackground.appBar.textColor = '#ffffff';
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
    static contextTypes = {
  		changeTheme: React.PropTypes.func,
        muiTheme: React.PropTypes.object
	}
    
    static childContextTypes = {
        refreshScrollbar: React.PropTypes.func
	}
    
    getChildContext() {
        var _this = this;
        return {
            refreshScrollbar: () => {
                _this.refs.scrollbar.scrollArea.refresh();
            }
        };
    }
    
	constructor() {
		super();
		this.styles = {
            wrapper: {
                flex: 1
            },
			appBar: {
				position: 'fixed',
				top: '0'
			},
			navBar: {
				marginTop: '64px',
                overflow: 'hidden'
			},
            area: {
                height: '100%'
            },
			workZone: {
				default: {
			    	marginTop: '88px',
    				marginLeft: '300px',
					marginRight: '35px',
                    transition: Transitions.create('all', '200ms', '0ms', 'ease-in-out'),
				},
				wide: {
					marginLeft: '20px'
				}
			},
			rightBlock: {
				avatarWrapperDisplay: {
					display: 'inline-block',
					verticalAlign: 'top',
					paddingTop: '5px',
					paddingRight: '12px'
				},
                avatarWrapperPadding: {
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
		this.state = { 
            menuOpen: true, 
            rightBar: {
                messageMenuOpen: false, 
                settingsMenuOpen: false 
            }
        };
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
		<div style={[this.styles.wrapper, this.context.muiTheme.layout]}>
            <AppBar ref='appBar' 
				title='Reactivity' 
				onLeftIconButtonTouchTap={this._toggleNav} 
				iconElementLeft={<IconButton onTouchTap={this._toggleNav}>{this.state.menuOpen ? <NavigationClose /> : <Menu />}</IconButton>} 
				iconElementRight={
						<div>
							<div style={[this.styles.rightBlock.avatarWrapperDisplay, this.styles.rightBlock.avatarWrapperPadding]}>
								<Avatar src='/lib-template/content/avatar.jpg' />
							</div>
                            <Badge badgeContent={5} primary={true} style={this.styles.rightBlock.badgeWrapper} badgeStyle={this.styles.rightBlock.badge}>
                                <IconButton onTouchTap={() => this._toggleRightNav('messageMenuOpen')}>
                                    <Message color={Colors.white}  />
                                </IconButton>
                            </Badge>
                            <IconButton onTouchTap={() => this._toggleRightNav('settingsMenuOpen')} style={{padding: 0}}>
                                <Settings color={Colors.white}  />
                            </IconButton>
							<IconMenu style={this.styles.rightBlock.iconMenu} iconButtonElement={
								<IconButton > <MoreVertIcon color={Colors.white}  /></IconButton>
								}>
								<MenuItem primaryText="Settings" />
								<MenuItem primaryText="Sign out" />
							</IconMenu>
						</div>
					}
				style={this.styles.appBar}/>
            
            <Nav ref='nav'
                docked={true}
                style={this.styles.navBar}
                open={this.state.menuOpen}>
                <ScrollArea style={this.styles.area} horizontal={false} ref='scrollbar'>
                    <NavMenuItem route='/' leftIcon={<Dashboard/>}>Dashboard</NavMenuItem>
                    <NavBlock text='Sample pages' leftIcon={<ContentCopy/>}>
                        <NavMenuItem route='/login-page'>Login</NavMenuItem>
                        <NavMenuItem route='/form'>Form</NavMenuItem>
                        <NavMenuItem route='/error-404'>Error 404</NavMenuItem>    
                        <NavMenuItem route='/sign-up-page'>Sign up</NavMenuItem>
                    </NavBlock>
                    <NavBlock text='Charts' leftIcon={<Timeline/>}>
                        <NavMenuItem route='/chartjs'>Chart.js</NavMenuItem>
                    </NavBlock>
                    <NavBlock text='Basic elements' leftIcon={<Code/>}>
                        <NavMenuItem route='/autocomplete'>Autocomplete</NavMenuItem>
                        <NavMenuItem route='/textfields'>Text fields</NavMenuItem>
                        <NavMenuItem route='/buttons'>Buttons</NavMenuItem>
                        <NavMenuItem route='/sliders'>Sliders</NavMenuItem>
                        <NavMenuItem route='/checkboxes'>Checkboxes</NavMenuItem>
                        <NavMenuItem route='/popovers'>Popovers</NavMenuItem>
                        <NavMenuItem route='/datepicker'>Datepicker</NavMenuItem>
                        <NavMenuItem route='/dialogs'>Dialogs</NavMenuItem>
                        <NavMenuItem route='/dropdown'>Dropdown</NavMenuItem>
                        <NavMenuItem route='/progressBars'>ProgressBars</NavMenuItem>
                        <NavMenuItem route='/progressDecks'>ProgressDecks</NavMenuItem>
                        <NavMenuItem route='/tables'>Tables</NavMenuItem>
                        <NavMenuItem route='/images'>Image gallery</NavMenuItem>
                        <NavMenuItem route='/snackbar'>Snackbar</NavMenuItem>
                    </NavBlock>
                    
                    <NavBlock text='Icons' leftIcon={<Image/>}>
                        {
                        IconCategories.map((category, i) => {
                        return (
                            <NavMenuItem key={i} route={`/icons/${category.toLowerCase()}`}>
                                {category}
                            </NavMenuItem>);
                        })
                    }
                    </NavBlock>
                </ScrollArea>
			</Nav>
            <CustomNav 
				ref={'settingsNav'}
				openRight={true}
				style={this.styles.navBar} 
                open={this.state.rightBar.settingsMenuOpen}>
                <List subheader="Themes" subheaderStyle={this.context.muiTheme.list.subheader}>
                    <ListItem
                        leftAvatar={<Avatar backgroundColor={Colors.grey200} />}
                        primaryText="Light Theme"
                        onTouchTap={() => {
                            this.context.changeTheme('light');
                        }} />
                    <Divider />
                    <ListItem
                        leftAvatar={<Avatar backgroundColor={Colors.grey900} />}
                        primaryText="Dark Theme"
                        onTouchTap={() => {
                            this.context.changeTheme('dark');
                        }} />
                    <Divider />
                    <ListItem
                        leftAvatar={<Avatar backgroundColor={Colors.grey900}>B</Avatar>}
                        primaryText="Background Theme"
                        onTouchTap={() => {
                            this.context.changeTheme('darkBackground');
                        }} />
                </List>
            </CustomNav>
			<CustomNav 
				ref={'messageNav'}
				openRight={true}
				style={this.styles.navBar} 
                open={this.state.rightBar.messageMenuOpen}>
                <List subheader="Today" subheaderStyle={this.context.muiTheme.list.subheader}>
                    <ListItem
                        leftAvatar={<Avatar src="/lib-template/content/ok-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Brendan Lim"
                        secondaryText={
                        <p style={this.context.muiTheme.messageListItem.text}>
                            <span style={this.context.muiTheme.messageListItem.span}>Brunch this weekend?</span><br/>
                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="/lib-template/content/kolage-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="me, Scott, Jennifer"
                        secondaryText={
                        <p style={this.context.muiTheme.messageListItem.text}>
                            <span style={this.context.muiTheme.messageListItem.span}>Summer BBQ</span><br/>
                            Wish I could come, but I&apos;m out of town this weekend.
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="/lib-template/content/uxceo-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Grace Ng"
                        secondaryText={
                        <p style={this.context.muiTheme.messageListItem.text}>
                            <span style={this.context.muiTheme.messageListItem.span}>Oui oui</span><br/>
                            Do you have any Paris recs? Have you ever been?
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="/lib-template/content/kerem-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Kerem Suer"
                        secondaryText={
                        <p style={this.context.muiTheme.messageListItem.text}>
                            <span style={this.context.muiTheme.messageListItem.span}>Birthday gift</span><br/>
                            Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                        </p>
                        }
                        secondaryTextLines={2} />
                    <Divider inset={true} />
                    <ListItem
                        leftAvatar={<Avatar src="/lib-template/content/raquelromanp-128.jpg" />}
                        rightIconButton={rightIconMenu}
                        primaryText="Raquel Parrado"
                        secondaryText={
                        <p style={this.context.muiTheme.messageListItem.text}>
                            <span style={this.context.muiTheme.messageListItem.span}>Recipe to try</span><br/>
                            We should eat this: grated squash. Corn and tomatillo tacos.
                        </p>
                        }
                        secondaryTextLines={2} />
                </List>
            </CustomNav>
			<div style={Object.assign({}, this.styles.workZone.default, !this.state.menuOpen && this.styles.workZone.wide)}>{this.props.children}</div>
		</div>);
	}
	
	_toggleNav = () => {
		this.setState({menuOpen: !this.state.menuOpen});
		window.dispatchEvent(new Event('resize'));
	}
	
	_toggleRightNav = (name) => {
        let newState = {
            rightBar: {
            }
        };
        Object.assign(newState.rightBar, this.state.rightBar);
        Object.keys(newState.rightBar).forEach(key => newState.rightBar[key] = false);
        newState.rightBar[name] = !this.state.rightBar[name];
		this.setState(newState);
	}
}

export default LayoutWrapper
