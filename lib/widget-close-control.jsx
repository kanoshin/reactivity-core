import React from 'react'
import { IconButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'

class WidgetCloseControl extends React.Component {
	render() {
		return (
			<IconButton onTouchTap={this.context.close}>
				<NavigationClose />
			</IconButton>
			);
	}
	
	static contextTypes = {
		close: React.PropTypes.func
	}
}

export default WidgetCloseControl