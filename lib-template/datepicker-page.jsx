import React from 'react'
import Radium from 'radium'
import { TextField, DatePicker } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

@Radium
class DatepickerPage extends React.Component {
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Datepickers' />
					<WidgetText>
						<Grid>
							<Cell size='3/3'>
                                <DatePicker hintText="Dialog" container="dialog" autoOk={true} />
                                <DatePicker hintText="Dialog (landscape)" container="dialog" autoOk={true} />
                                <DatePicker hintText="Inline" container="inline" />
                                <DatePicker hintText="Inline (auto ok)" container="inline" autoOk={true} />
                                <DatePicker hintText="Japan locale" container="inline" DateTimeFormat={Intl.DateTimeFormat} locale='ja-JP' autoOk={true}/>
                                
                                {/* TODO: add example for closing dialog when focus is lost  */}                                
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default DatepickerPage