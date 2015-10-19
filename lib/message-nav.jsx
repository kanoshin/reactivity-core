import React from 'react'
import Radium from 'radium'
import { LeftNav } from 'material-ui'

class MessageNav extends LeftNav {
	constructor(props, context) {
		super(props, context);
		this.state.open = !!this.props.initiallyOpen;
	}
}

export default MessageNav