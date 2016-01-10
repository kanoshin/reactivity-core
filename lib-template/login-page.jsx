import React from 'react'
import Radium from 'radium'
import { TextField, DropDownMenu, MenuItem, DatePicker, RaisedButton, Checkbox } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

@Radium
class LoginPage extends React.Component {
    constructor() {
		super();
		this.state = {
		};
	}
    
	render() {
		return (
            <div style={{flex: 1, backgroundColor: 'red'}}>
                <Grid>
                    <Cell size='1/3'>
                        123
                    </Cell>
                </Grid>
            </div>
        );
	}
}

export default LoginPage