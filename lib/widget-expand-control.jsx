import React from 'react'
import { IconButton } from 'material-ui'
import ExpandLess from 'material-ui/lib/svg-icons/navigation/expand-less'
import ExpandMore from 'material-ui/lib/svg-icons/navigation/expand-more'

class WidgetCloseControl extends React.Component {
	render() {
		return (
			<IconButton onTouchTap={this.props.onTouchTap}>
				<ExpandLess />
			</IconButton>
			);
	}
}

export default WidgetCloseControl