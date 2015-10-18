import React from 'react'
import { CardHeader } from 'material-ui'

class WidgetHeader extends React.Component {
	render() {
		return (
			<CardHeader {...this.props}>
				{this.props.children}
			</CardHeader>
			);
	}
}

export default WidgetHeader