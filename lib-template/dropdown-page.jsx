import React from 'react'
import Radium from 'radium'
import { TextField, DropDownMenu, MenuItem } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

var now = new Date();
var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const weekDaysItems = [];
for (let i = 0; i < weekDays.length; i++ ) {
  weekDaysItems.push(<MenuItem value={i} key={i} primaryText={`${weekDays[i]}`}/>);
}
const monthItems = [];
for (let i = 0; i < months.length; i++ ) {
  monthItems.push(<MenuItem value={i} key={i} primaryText={`${months[i]}`}/>);
}

@Radium
class DropdownPage extends React.Component {
    constructor(props) {
        super(props);
       
        this.sex = { value: 0 }
        this.weekDay = { value: now.getDay() };
        this.month = { value: now.getMonth() };
    }

    sexChange = (e, index, value) => {
        this.sex.value = value;
        this.setState({value});
    };
    weekDayChange = (e, index, value) => {
        this.weekDay.value = value;
        this.setState({value});
    };
    monthChange = (e, index, value) => {
        this.month.value = value;
        this.setState({value});
    };    
    
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Dropdown' />
					<WidgetText>
						<Grid>
							<Cell size='3/3'>
                                Your sex is <DropDownMenu value={this.sex.value} onChange={this.sexChange}>
                                    <MenuItem value={0} primaryText="N/D"/>
                                    <MenuItem value={1} primaryText="Male"/>
                                    <MenuItem value={2} primaryText="Female"/>
                                </DropDownMenu><br/>
                                Current month is <DropDownMenu value={this.month.value} onChange={this.monthChange}>
                                    {monthItems}
                                </DropDownMenu><br/>
                                Current day of week is <DropDownMenu value={this.weekDay.value} onChange={this.weekDayChange}>
                                    {weekDaysItems}
                                </DropDownMenu> 
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default DropdownPage