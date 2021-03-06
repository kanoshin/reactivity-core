import React from 'react'
import { Grid } from 'react-flexr';
import 'react-flexr/styles.css!'

class ReactivityGrid extends React.Component {
	render() {
		return <Grid style={{margin: '0 0 22'}} {...this.props}>{this.props.children}</Grid>;
	}
}

export default ReactivityGrid