import React from 'react'
import { Card, CardText } from 'material-ui'

class Widget extends React.Component {
	render() {
		return (
			<Card>
				{this.props.children}
			</Card>
			);
	}
}

export default Widget