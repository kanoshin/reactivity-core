import React from 'react'
import { TextField } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

let errors = {
	requiredErrorText: 'This field is required',
	numericErrorText: 'This field must be numeric'
};

let numericRegexp = /^[0-9]+$/i;

class FormsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			requiredErrorText: errors.requiredErrorText,
			numericErrorText: errors.numericErrorText
		};
	}
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Simple text fields' />
					<WidgetText>
						<Grid>
							<Cell size='1/3'>
								<TextField
									hintText="Hint Text" />
							</Cell>
							<Cell size='1/3'>
							<TextField
								hintText="Styled Hint Text"
								hintStyle={{color: 'red'}} />
							</Cell>
							<Cell size='1/3'>
							<TextField
								hintText="Hint Text"
								defaultValue="Default Value" />
							</Cell>
							<Cell size='1/3'>
							<TextField
								hintText="Custom Underline Focus Color"
								underlineFocusStyle={{borderColor: 'blue'}} />
							</Cell>
							<Cell size='1/3'>
							<TextField
								hintText="Hint Text (MultiLine)"
								multiLine={true} />
							</Cell>
							<Cell size='1/3'>
							<TextField
								hintText="The hint text can be as long as you want, it will wrap."
								multiLine={true} />
							</Cell>
							<Cell size='1/3'>
							<TextField
								hintText="Hint Text"
								errorText="The error text can be as long as you want, it will wrap." />
							</Cell>
						</Grid>
					</WidgetText>
					<WidgetTitle title='Text fields with validation' />
					<WidgetText>
						<Grid>
							<Cell size='1/3'>
								<TextField
									hintText="Login"
									errorText={this.state.requiredErrorText}
									onChange={this._onRequiredChange} />
							</Cell>
							<Cell size='1/3'>
								<TextField
									hintText="Numeric field"
									errorText={this.state.numericErrorText}
									onChange={this._onNumericChange} />
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
	
	_onRequiredChange = (event) => {
		if(event.target.value) {
			this.setState({requiredErrorText: ''});
		}
		else {
			this.setState({requiredErrorText: errors.requiredErrorText});
		}
	}
	
	_onNumericChange = (event) => {
		if(numericRegexp.test(event.target.value)) {
			this.setState({numericErrorText: ''});
		}
		else {
			this.setState({numericErrorText: errors.numericErrorText});
		}
	}
}

export default FormsPage