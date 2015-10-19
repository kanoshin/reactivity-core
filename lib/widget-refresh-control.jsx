import React from 'react'
import { IconButton } from 'material-ui'
import Refresh from 'material-ui/lib/svg-icons/navigation/refresh'

class WidgetRefreshControl extends React.Component {
	render() {
		return (
			<IconButton onTouchTap={this.props.onTouchTap}>
				<Refresh />
			</IconButton>
			);
	}
}

export default WidgetRefreshControl