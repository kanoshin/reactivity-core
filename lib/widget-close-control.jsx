import React from 'react'
import { IconButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'

class WidgetCloseControl extends React.Component {
    static contextTypes = {
  		muiTheme: React.PropTypes.object,
	}
    
	render() {
		return (
			<IconButton onTouchTap={this.props.onTouchTap}>
				<NavigationClose color={this.context.muiTheme.widget.control.color} />
			</IconButton>
			);
	}
}

export default WidgetCloseControl