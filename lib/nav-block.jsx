import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Radium from 'radium'

let styles = {
	default: {
		paddingLeft: '10px'
	},
	closed: {
		display: 'none'
	}
};

@Radium
class NavBlock extends React.Component {
	constructor(props) {
		super();
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
				<MenuItem primaryText={this.props.text} onTouchTap={this._toggle} />
				<div style={[styles.default, !this.state.open && styles.closed]}>
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