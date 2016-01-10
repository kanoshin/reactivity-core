import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'

class NavMenuItem extends React.Component {
	constructor(props, context) {
		super();
		this.id = context.getId();
		this.state = {isActive: context.location.pathname === props.route};
		this.styles = {
			active: {
				color: 'rgb(255, 64, 129)'
			}
		};
	}

	static contextTypes = {
    	subscribe: React.PropTypes.func,
		trigger: React.PropTypes.func,
		getId: React.PropTypes.func,
		location: React.PropTypes.object,
		history: React.PropTypes.object
  	}
	
	componentDidMount() {
		this.dispose = this.context.subscribe(() => {this.setState({isActive: false})})
	}
	
	componentWillUnmount() {
		this.dispose();
	}
	  
	render() {
		return (
			<MenuItem id={this.id} 
				onTouchTap={this._trigger} 
				style={Object.assign({}, 
				this.state.isActive && this.styles.active)} {...this.props}>
				{this.props.children}
			</MenuItem>
			);
	}
	
	_trigger = () => {
		this.context.trigger(this.id);
		this.setState({isActive: true});
		this.context.history.pushState({}, this.props.route)
	}
}

export default NavMenuItem