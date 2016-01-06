import React from 'react'
import Radium from 'radium'
import { RadioButtonGroup, RadioButton, Checkbox, Toggle } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

@Radium
class CheckboxesPage extends React.Component {
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Checkboxes' />
					<WidgetText>
						<Grid>
							<Cell size='1/2'>
								<Checkbox
									name="checkboxName1"
									value="checkboxValue1"
									label="went for a run today"/>
							</Cell>
							<Cell size='1/2'>
								<Checkbox
									name="checkboxName2"
									value="checkboxValue2"
									label="fed the dog"
									defaultChecked={true}/>
							</Cell>
							<Cell size='1/2'>
								<Checkbox
									name="checkboxName3"
									value="checkboxValue3"
									label="built a house on the moon"
									disabled={true}/>
							</Cell>
							<Cell size='1/2'>
								<Checkbox
									name="checkboxName4"
									value="checkboxValue4"
								//	checkedIcon={<ToggleStar />}
								//	unCheckedIcon={<ToggleStarBorder />}
									label="custom icon" />
							</Cell>
						</Grid>
					</WidgetText>
					<Grid>
						<Cell size='1/2'>
							<WidgetTitle title='Radio buttons' />
							<WidgetText>
								<RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
									<RadioButton
										value="light"
										label="prepare for light speed"
										style={{marginBottom:16}} />
									<RadioButton
										value="not_light"
										label="light speed too slow"
										style={{marginBottom:16}}/>
									<RadioButton
										value="ludicrous"
										label="go to ludicrous speed"
										style={{marginBottom:16}}
										disabled={true}/>
								</RadioButtonGroup>
							</WidgetText>
						</Cell>
						<Cell size='1/2'>
							<WidgetTitle title='Toggles' />
							<WidgetText>
								<Toggle
									name="toggleName1"
									value="toggleValue1"
									label="activate thrusters"/>
								<Toggle
									name="toggleName2"
									value="toggleValue2"
									label="auto-pilot"
									defaultToggled={true}/>
								<Toggle
									name="toggleName3"
									value="toggleValue3"
									label="initiate self-destruct sequence"
									disabled={true}/>
							</WidgetText>
						</Cell>
					</Grid>
				</Widget>
			</Dashboard>
	}
}

export default CheckboxesPage