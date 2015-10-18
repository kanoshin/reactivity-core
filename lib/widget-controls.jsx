import React from 'react'
import Radium from 'radium'

class WidgetControls extends React.Component {
	constructor() {
		super();
		this.styles = {
			wrapper: {
				display: 'inline-block',
				float: 'right',
				verticalAlign: 'top',
				marginTop: '-6px',
				marginRight: '-12px'
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

WidgetControls = Radium(WidgetControls);

export default WidgetControls