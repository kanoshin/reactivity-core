import React from 'react'
import { CardActions } from 'material-ui'

class WidgetActions extends React.Component {
	render() {
		return (
			<CardActions {...this.props}>
				{this.props.children}
			</CardActions>
			);
	}
}

export default WidgetActions