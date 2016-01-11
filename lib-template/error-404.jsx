import React from 'react'
import Radium from 'radium'
import { Slider, Styles, ToggleStar } from 'material-ui'
import FloatingActionButton from 'material-ui/lib/floating-action-button'
import { Dashboard, Widget, WidgetText, WidgetTitle } from 'reactivity'
import FontIcon from 'material-ui/lib/font-icon';

@Radium
class Error404 extends React.Component {
	constructor() {
		super();
		
		this.styles = {
			wrapper: {
				width: '100%',
				fontFamily: '"Roboto", sans-serif',
                minWidth: '910px'
			},
			top: {
				height: '65%',
				backgroundColor: Styles.Colors.grey200,
				width: '100%',
				position: 'relative'
			},
			bottom: {
				height: '35%',
				backgroundColor: Styles.Colors.grey800,
				width: '100%',
				position: 'relative',
				textAlign: 'center'
			},
			error: {
				color: Styles.Colors.grey900,
				bottom: '0px',
				right: '150px',
				position: 'absolute',
				fontSize:'250px'
			},
			message: {
				color:  Styles.Colors.grey50,
				position: 'absolute',
				fontSize:'50px',
				right: '175px'
			},            
            buttonHome: {
                position: 'absolute',
                bottom: '-23px',
                zIndex: 100,
                left: '150px'
            }
		}
	}

	render() {
		return (
			<div style={this.styles.wrapper}>
				<div style={this.styles.top}>
					<b style={this.styles.error}>404</b>
					<FloatingActionButton style={this.styles.buttonHome} secondary={true}>
                        <FontIcon className="material-icons" color={Styles.Colors.blueGrey50}>home</FontIcon>
					</FloatingActionButton>
				</div>
				<div style={this.styles.bottom}>
					<b style={this.styles.message}>Page not found</b>
				</div>
			</div>
		)
	}
    
}

export default Error404