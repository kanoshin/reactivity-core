import React from 'react'
import { LeftNav } from 'material-ui'
import ScrollArea from 'react-scrollbar'

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
            <ScrollArea style={this.styles.area} horizontal={false}>
                <LeftNav ref='leftNav' {...this.props}>
                    {this.props.children}
                </LeftNav>
            </ScrollArea>
			);
	}
	
	toggle() {
		this.refs.leftNav.toggle();
	}
}

export default Nav