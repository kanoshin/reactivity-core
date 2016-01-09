import React from 'react'
import { CardHeader } from 'material-ui'

class WidgetHeader extends React.Component {
    static contextTypes = {
  		muiTheme: React.PropTypes.object,
	}
    
	render() {
		return (
			<CardHeader {...this.props} 
                titleColor={this.context.muiTheme.widget.header.titleColor}
                subtitleColor={this.context.muiTheme.widget.header.subtitleColor}>
				{this.props.children}
			</CardHeader>
			);
	}
}

export default WidgetHeader