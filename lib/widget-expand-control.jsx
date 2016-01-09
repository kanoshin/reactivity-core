import React from 'react'
import { IconButton } from 'material-ui'
import ExpandLess from 'material-ui/lib/svg-icons/navigation/expand-less'
import ExpandMore from 'material-ui/lib/svg-icons/navigation/expand-more'

class WidgetCloseControl extends React.Component {
    static contextTypes = {
  		muiTheme: React.PropTypes.object,
	}
    
	render() {
		return (
			<IconButton onTouchTap={this.props.onTouchTap}>
				<ExpandLess color={this.context.muiTheme.widget.control.color} />
			</IconButton>
			);
	}
}

export default WidgetCloseControl