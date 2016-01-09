import React from 'react'
import { CardTitle } from 'material-ui'

class WidgetTitle extends React.Component {
    static contextTypes = {
  		muiTheme: React.PropTypes.object,
	}
    
	render() {
		return (
			<CardTitle {...this.props}
                titleColor={this.context.muiTheme.widget.title.titleColor}
                subtitleColor={this.context.muiTheme.widget.title.subtitleColor} />
			);
	}
}

export default WidgetTitle