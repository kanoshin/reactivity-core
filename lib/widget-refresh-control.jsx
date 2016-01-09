import React from 'react'
import { IconButton } from 'material-ui'
import Refresh from 'material-ui/lib/svg-icons/navigation/refresh'

class WidgetRefreshControl extends React.Component {
    static contextTypes = {
  		muiTheme: React.PropTypes.object,
	}
    
	render() {
		return (
			<IconButton onTouchTap={this.props.onTouchTap}>
				<Refresh color={this.context.muiTheme.widget.control.color} />
			</IconButton>
			);
	}
}

export default WidgetRefreshControl