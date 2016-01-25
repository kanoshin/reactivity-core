import React from 'react'
import { LeftNav } from 'material-ui'
import ScrollArea from 'react-scrollbar'

class Nav extends React.Component {
	constructor() {
		super();
		this.menuItemSubscribers = [];
		this.menuItemId = 0;
        this.styles = {
            area: {
                height: '100%'
            }
		};
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
                <ScrollArea style={this.styles.area} horizontal={false}>
                    {this.props.children}
                </ScrollArea>
            </LeftNav>
			);
	}
	
	toggle() {
		this.refs.leftNav.toggle();
	}
}

export default Nav