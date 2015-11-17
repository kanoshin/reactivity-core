import React from 'react'
import Radium from 'radium'
import { Slider } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetTitle } from 'reactivity'

@Radium
class SlidersPage extends React.Component {
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Sliders' />
					<WidgetText>
						<Slider name="slider1" />
						<Slider name="slider2" defaultValue={0.5} step={0.10} />
						<Slider name="slider3" defaultValue={1} />
						<Slider name="slider1" disabled={true} />
						<Slider name="slider2" disabled={true} value={0.5} />
						<Slider name="slider3" disabled={true} value={1} />
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default SlidersPage