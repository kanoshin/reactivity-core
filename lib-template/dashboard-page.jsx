import React from 'react'
import { Dashboard, Widget, WidgetText } from 'reactivity'

class DashboardPage extends React.Component {
	render() {
		return (
			<Dashboard>
				<Widget width={6}>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6}>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6}>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
			</Dashboard>
			);
	}
}

export default DashboardPage