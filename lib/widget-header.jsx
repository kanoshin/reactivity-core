import React from 'react'
import { CardHeader } from 'material-ui'

class WidgetHeader extends React.Component {
	render() {
		var {
		avatar,
		...others
		} = this.props;
		return (
			<CardHeader {...others} avatar={avatar ? avatar : <div></div>}>
				{this.props.children}
			</CardHeader>
			);
	}
}

export default WidgetHeader