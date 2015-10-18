import React from 'react'
import { CardText } from 'material-ui'

class WidgetText extends React.Component {
	render() {
		return (
			<CardText {...this.props}>
				{this.props.children}
			</CardText>
			);
	}
}

export default WidgetText