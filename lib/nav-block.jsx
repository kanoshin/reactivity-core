import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Radium from 'radium'
import ExpandLess from 'material-ui/lib/svg-icons/navigation/expand-less'
import ExpandMore from 'material-ui/lib/svg-icons/navigation/expand-more'
import Transitions from 'material-ui/lib/styles/transitions';

const itemHeight = 200;

@Radium
class NavBlock extends React.Component {
	constructor(props) {
		super();
		
		this.styles = {
			default: {
				paddingLeft: '10px',
				transition: Transitions.create('all', '400ms', '0ms', 'ease-in-out'),
				opacity: 1,
				maxHeight: itemHeight * (props.children.length == null ? 1 : props.children.length) + 'px'
			},
			closed: {
				maxHeight: 0,
				opacity: 0
			}
		};
		
		this.state = {
			open: props.initiallyOpen
		};
	}
	
	static propTypes = {
		initiallyOpen: React.PropTypes.bool
	}
	
	static defaultProps = {
		initiallyOpen: false
	}

	render() {
		return (
			<div>
				<MenuItem 
					primaryText={this.props.text} 
					onTouchTap={this._toggle} 
					rightIcon={this.state.open ? <ExpandLess /> : <ExpandMore />}
                    leftIcon={this.props.leftIcon} />
				<div style={[this.styles.default, !this.state.open && this.styles.closed]}>
					{this.props.children}
				</div>
			</div>
			);
	}
	
	_toggle = () => {
		this.setState({open: !this.state.open});
	}
}

export default NavBlock