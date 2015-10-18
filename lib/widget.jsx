import React from 'react'
import { Card } from 'material-ui'

class Widget extends React.Component {
	render() {
		return (
			<Card {...this.props}>
				{this.props.children}
			</Card>
			);
	}
}

export default Widget