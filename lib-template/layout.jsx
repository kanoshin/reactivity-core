import React from 'react'
import { AppBar } from 'material-ui'

class Layout extends React.Component {
	render() {
		return (
		<div>
			<AppBar title='Reactivity' />
			{this.props.children}
		</div>);
	}
}

export default Layout