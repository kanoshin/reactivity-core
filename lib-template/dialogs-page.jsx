import React from 'react'
import Radium from 'radium'
import { FlatButton, RaisedButton } from 'material-ui'
import Dialog from 'material-ui/lib/dialog';
import { Dashboard, Widget, WidgetText, WidgetTitle } from 'reactivity'

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

@Radium
class DialogsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		actionsDialogOpen: false,
		modalDialogOpen: false,
		customWidthDialogOpen: false
		};
	}
	
	handleOpen = (dialog) => {
		var newState = {};
		newState[dialog] = true;
		this.setState(newState);
	}
	
	handleClose = () => {
		this.setState({
		actionsDialogOpen: false,
		modalDialogOpen: false,
		customWidthDialogOpen: false
		});
	}

	render() {
		const actionDialogActions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onTouchTap={this.handleClose} />,
			<FlatButton
				label="Submit"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose} />,
			];
			
		const modalDialogActions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onTouchTap={this.handleClose} />,
			<FlatButton
				label="Submit"
				primary={true}
				disabled={true}
				onTouchTap={this.handleClose} />,
			];
		
		const customWidthDialogActions = [
			<FlatButton
				label="Cancel"
				secondary={true}
				onTouchTap={this.handleClose} />,
			<FlatButton
				label="Submit"
				primary={true}
				onTouchTap={this.handleClose} />,
			];
		
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Dialogs' />
					<WidgetText>
						<div>
							<RaisedButton label="Dialog With Actions" onTouchTap={() => this.handleOpen('actionsDialogOpen')} />
							<Dialog
								title="Dialog With Actions"
								actions={actionDialogActions}
								modal={false}
								open={this.state.actionsDialogOpen}
								onRequestClose={this.handleClose}>
								The actions in this window were passed in as an array of react objects.
							</Dialog>
						</div>
						<br />
						<div>
							<RaisedButton label="Modal Dialog" onTouchTap={() => this.handleOpen('modalDialogOpen')} />
							<Dialog
								title="Dialog With Actions"
								actions={modalDialogActions}
								modal={true}
								open={this.state.modalDialogOpen}>
								Only actions can close this dialog.
							</Dialog>
						</div>
						<br />
						<div>
							<RaisedButton label="Dialog With Custom Width" onTouchTap={() => this.handleOpen('customWidthDialogOpen')} />
							<Dialog
								title="Dialog With Custom Width"
								actions={customWidthDialogActions}
								modal={true}
								contentStyle={customContentStyle}
								open={this.state.customWidthDialogOpen}>
								This dialog spans the entire width of the screen.
							</Dialog>
						</div>
						<br />
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default DialogsPage