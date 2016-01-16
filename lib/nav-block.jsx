import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Radium from 'radium'
import ExpandLess from 'material-ui/lib/svg-icons/navigation/expand-less'
import ExpandMore from 'material-ui/lib/svg-icons/navigation/expand-more'
import Transitions from 'material-ui/lib/styles/transitions';

const itemHeight = 200;

@Radium
class NavBlock extends React.Component {
    static contextTypes = {
  		refreshScrollbar: React.PropTypes.func,
        muiTheme: React.PropTypes.object
	}
    
	constructor(props) {
		super();
		
		this.styles = {
			default: {
				paddingLeft: '10px',
				transition: Transitions.create('all', '400ms', '0ms', 'ease-in-out'),
				opacity: 1,
				maxHeight: '100%'
			},
			closed: {
                opacity: 0,
				maxHeight: 0
			},
            hidden: {
                display: "none"
            }
		};
		
		this.state = {
			open: props.initiallyOpen,
            hidden: !props.initiallyOpen
		};
	}
	
	static propTypes = {
		initiallyOpen: React.PropTypes.bool
	}
	
	static defaultProps = {
		initiallyOpen: false
	}

	render() {
        var { leftIcon } = this.props;
        var patchedLeftIcon;
        if(leftIcon) {
            patchedLeftIcon = React.cloneElement(leftIcon, { color: this.context.muiTheme.nav.icon.color });
        }
		return (
			<div>
				<MenuItem 
					primaryText={this.props.text} 
					onTouchTap={this._toggle} 
					rightIcon={this.state.open ? <ExpandLess /> : <ExpandMore />}
                    leftIcon={patchedLeftIcon} />
				<div style={[this.styles.default, !this.state.open && this.styles.closed, this.state.hidden && this.styles.hidden]}>
					{this.props.children}
				</div>
			</div>
			);
	}
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState || this.props !== nextProps;
    }
	
	_toggle = () => {
		this.setState({open: !this.state.open});
                
        if (this.state.open) {
            setTimeout(() => {
                this.setState({hidden: !this.state.open});
                this.context.refreshScrollbar();
            }, 400);
        }
        else {
            this.setState({hidden: this.state.open});
            setTimeout(() => {
                this.context.refreshScrollbar();
            }, 200);
        }
	}
}

export default NavBlock