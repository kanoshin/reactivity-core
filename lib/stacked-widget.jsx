import React from 'react'
import Radium from 'radium'
import { Cell } from 'react-flexr';
import 'react-flexr/styles.css!'
import { WidgetExpandControl, WidgetCloseControl, WidgetRefreshControl, WidgetControls } from 'reactivity'
import { Card } from 'material-ui'

@Radium
class StackedWidget extends React.Component {
	constructor(props) {
		super();
		
		this.styles = {
			default: {
				padding: '0',
                overflow:'visible',
				display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
			},
			cardWrapper: {
				padding: '10px', 
				width: '100%', 
				display: 'flex', 
				boxSizing: 'border-box',
                overflow:'visible',
                flex: 1
			},
			card: {
				position: 'relative',
				width: '100%',
                overflow:'visible'
			},
            cardVertCentered: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }
		};
	}
	
	render() {
        let {style, width, ...other} = this.props;
		return (
			<Cell size={width + '/12'} style={this.styles.default}>
                {React.Children.map(this.props.children, child => {
                    return (
                        <div style={this.styles.cardWrapper}>
                            <Card ref={'card'} {...other} style={Object.assign({}, this.styles.card, child.props.centered && this.styles.cardVertCentered, style)}>
                                {child}
                            </Card>
                        </div>
                    );
                })}
			</Cell>
			);
	}
}

export default StackedWidget