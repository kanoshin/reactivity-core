import React from 'react'
import { TextField } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

class FormsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			requiredErrorText: 'This field is required'
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
							{/*<TextField
								hintText="Hint Text"
								errorText={this.state.errorText}
								onChange={this._handleErrorInputChange} />
							<TextField
								hintText="Hint Text (custom error color)"
								errorText={this.state.error2Text}
								errorStyle={{color:'orange'}}
								onChange={this._handleError2InputChange}
								defaultValue="Custom error color" />
							<TextField
								hintText="Disabled Hint Text"
								disabled={true} />
							<TextField
								hintText="Disabled Hint Text"
								disabled={true}
								defaultValue="Disabled With Value" />*/}
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
			this.setState({requiredErrorText: 'This field is required'});
		}
	}
}

export default FormsPage