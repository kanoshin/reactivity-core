import React from 'react'
import { Card } from 'material-ui'
import Radium from 'radium'
import { Cell } from 'react-flexr';
import 'react-flexr/styles.css!'

class Widget extends React.Component {
	constructor(props) {
		super();
		this.state = {
			isOpen: true
		};
		let hasExpander = false;
		React.Children.forEach(props.children, (child) => {
			if(child.props.actAsExpander){
				hasExpander = true;
			}
		});
		this.state.isExpanded = !hasExpander || !!props.initiallyExpanded;
		this.styles = {
			default: {
				paddingBottom: '10px'
			},
			closed: {
				display: 'none'
			},
			fullHeight: {
				display: 'flex'
			}
		};
	}

	getChildContext() {
		return {close: this._close};
	}
	
	render() {
		return (
			<Cell size={this.props.width + '/13'} style={Object.assign({}, this.styles.default, this.props.fullHeight && this.state.isExpanded && this.styles.fullHeight, !this.state.isOpen && this.styles.closed)}>
				<Card {...this.props} onExpandChange={this._onExpandChange}>
					{this.props.children}
				</Card>
			</Cell>
			);
	}
	
	static childContextTypes = {
		close: React.PropTypes.func
	}
	
	_close = () => {
		this.setState({isOpen: false});
	}
	
	_onExpandChange = (isExpanded) => {
		this.setState({isExpanded: isExpanded});
	}
}

Widget = Radium(Widget);

export default Widget