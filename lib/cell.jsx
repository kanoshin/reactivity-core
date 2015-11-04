import React from 'react'
import { Cell } from 'react-flexr';
import 'react-flexr/styles.css!'

let nativeCellStyle = {
	padding: '0'
};

let wrapperStyle = {
	paddingRight: '20px',
	paddingLeft: '20px', 
	boxSizing: 'border-box',
	paddingBottom: '20px'
};

class ReactivityCell extends React.Component {
	render() {
		let {
		style,
		...others
		} = this.props;
		return (
			<Cell {...others} style={Object.assign({}, nativeCellStyle, style)}>
				<div style={wrapperStyle}>
					{this.props.children}
				</div>
			</Cell>);
	}
}

export default ReactivityCell