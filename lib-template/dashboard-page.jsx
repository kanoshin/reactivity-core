import React from 'react'
import { IconButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetControls, WidgetCloseControl } from 'reactivity'

class DashboardPage extends React.Component {
	render() {
		return (
			<Dashboard fullHeight={true}>
				<Widget width={6}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle">
						<WidgetControls>
							<WidgetCloseControl />
						</WidgetControls>
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6} initiallyExpanded={true}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle"
						actAsExpander={true}
						showExpandableButton={true} />
					<WidgetText expandable={true}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={9}>
					<WidgetHeader>
						<WidgetControls>
							<WidgetCloseControl />
						</WidgetControls>
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={3}>
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