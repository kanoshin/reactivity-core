import React from 'react'
import Radium from 'radium'
import { TextField, DropDownMenu, MenuItem, DatePicker, RaisedButton, Checkbox } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

let errors = {
	requiredErrorText: 'This field is required',
    numericErrorText: 'This field must be numeric'
};

let numericRegexp = /^[0-9]+$/i;

@Radium
class FormPage extends React.Component {
    constructor() {
		super();
		this.state = {
			requiredErrorText: errors.requiredErrorText,
			numericErrorText: errors.numericErrorText
		};
        this.sex = { value: 0 }
	}
    
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Simple form' />
					<WidgetText>
						<Grid>
							<Cell size='3/3'>
								<TextField hintText="Name" errorText={this.state.requiredErrorText} onChange={this._onRequiredChange} />
							</Cell>
                            <Cell size='3/3'>
                                <TextField hintText="Company" />
                            </Cell>
                            <Cell size='3/3'>
                                <TextField hintText="Age" errorText={this.state.numericErrorText} onChange={this._onNumericChange} />
                            </Cell>
                            <Cell size='3/3'>
                                <DatePicker hintText="Birth" container="dialog" autoOk={true} />
                            </Cell>
                            <Cell size='3/3'>
                                Sex <DropDownMenu value={this.sex.value} onChange={this._sexChange}>
                                    <MenuItem value={0} primaryText="N/D"/>
                                    <MenuItem value={1} primaryText="Male"/>
                                    <MenuItem value={2} primaryText="Female"/>
                                </DropDownMenu>
                            </Cell>
                            <Cell size='3/3'>
                                <h4> We're glad to see you on our website! And last moment, you should agree with our statements to proceed work. Thank you! </h4>
                                <Checkbox
									name="checkboxName1"
									value="checkboxValue1"
									label="Agree with all agreements"/>
                            </Cell>
                            
                            
                            <Cell size='3/3'>
                                <RaisedButton label="Send" primary={true} style={{marginRight: "50px"}} />
                                <RaisedButton label="Cancel" secondary={true} />
                            </Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
	
    // TODO: extract these events (remove duplicate with text-field-page)
	_onRequiredChange = (event) => {
		if (event.target.value) {
			this.setState({requiredErrorText: ''});
		}
		else {
			this.setState({requiredErrorText: errors.requiredErrorText});
		}
	}
	
	_onNumericChange = (event) => {
		if (numericRegexp.test(event.target.value)) {
			this.setState({numericErrorText: ''});
		}
		else {
			this.setState({numericErrorText: errors.numericErrorText});
		}
	}
    
    _sexChange = (e, index, value) => {
        this.sex.value = value;
        this.setState({value});
    };
}

export default FormPage