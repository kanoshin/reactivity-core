import React from 'react'
import Radium from 'radium'
import { Cell } from 'react-flexr';
import 'react-flexr/styles.css!'
import { WidgetExpandControl, WidgetCloseControl, WidgetRefreshControl, WidgetControls } from 'reactivity'
import { Card } from 'material-ui'

class Widget extends React.Component {
	constructor(props) {
		super();
		this.state = {
			isOpen: true,
			controls: [],
			expanded: props.initiallyExpanded
		};
		
		if(props.onRefresh) {
			this.state.controls.push(<WidgetRefreshControl onTouchTap={props.onRefresh} />);
		}
		
		let hasExpandableChild = false;
		React.Children.forEach(props.children, (child) => {
			if(hasExpandableChild) {
				return;
			}
			if(child.props.expandable) {
				hasExpandableChild = true;
			}
		});
		
		this.state.hasExpandableChild = hasExpandableChild;
		
		if(hasExpandableChild) {
			this.state.controls.push(<WidgetExpandControl onTouchTap={this._toggleExpand} />);
		}
			
		if(props.closeControl) {
			this.state.controls.push(<WidgetCloseControl onTouchTap={this._toggleClose} />);
		}
		
		this.styles = {
			default: {
				paddingBottom: '20px'
			},
			closed: {
				display: 'none'
			},
			fullHeight: {
				display: 'flex'
			},
			relative: {
				position: 'relative'
			}
		};
	}
	
	getDefaultProps() {
		return {
			initiallyExpanded: false
		};
	}

	getChildContext() {
		return {close: this._close};
	}
	
	render() {
		return (
			<Cell size={this.props.width + '/13'} style={Object.assign({}, 
				this.styles.default, 
				this.props.fullHeight && (!this.state.hasExpandableChild || this.state.expanded) && this.styles.fullHeight, 
				!this.state.isOpen && this.styles.closed)}>
				<Card ref={'card'} {...this.props} style={this.styles.relative}>
					<WidgetControls>
						{this.state.controls}
					</WidgetControls>
					{this.props.children}
				</Card>
			</Cell>
			);
	}
	
	static childContextTypes = {
		close: React.PropTypes.func
	}
	
	_toggleClose = () => {
		this.setState({isOpen: false});
	}
	
	_toggleExpand = () => {
		this.refs.card._onExpandable();
		this.setState({expanded: !this.state.expanded});
	}
}

Widget = Radium(Widget);

export default Widget