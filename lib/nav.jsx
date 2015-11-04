import React from 'react'
import { LeftNav } from 'material-ui'

class Nav extends React.Component {
	constructor() {
		super();
		this.menuItemSubscribers = [];
		this.menuItemId = 0;
	}

	static childContextTypes = {
    	subscribe: React.PropTypes.func,
		trigger: React.PropTypes.func,
		getId: React.PropTypes.func
 	}
  
  	getChildContext() {
    	return {
			subscribe: (callback) => {
				var ind = this.menuItemSubscribers.push(callback);
				return () => {this.menuItemSubscribers.splice(ind, 1)};
			},
			trigger: (id) => 
				{this.menuItemSubscribers.forEach((callback) => {callback(id)})},
			getId: () => this.menuItemId++
		};
  	}
	  
	render() {
		return (
			<LeftNav ref='leftNav' {...this.props}>
				{this.props.children}
			</LeftNav>
			);
	}
	
	toggle() {
		this.refs.leftNav.toggle();
	}
}

export default Nav