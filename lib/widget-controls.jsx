import React from 'react'
import Radium from 'radium'

@Radium
class WidgetControls extends React.Component {
	constructor() {
		super();
		this.styles = {
			wrapper: {
				position: 'absolute',
				right: '5px',
				zIndex: '5'
			}
		};
	}

	render() {
		return (
			<div style={this.styles.wrapper}>
				{this.props.children}
			</div>
			);
	}
}

export default WidgetControls