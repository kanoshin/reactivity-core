import React from 'react'
import { IconButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetControls } from 'reactivity'

class DashboardPage extends React.Component {
	render() {
		return (
			<Dashboard>
				<Widget width={6}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle">
						<WidgetControls>
							<IconButton onTouchTap={this._toggleNav}>
								<NavigationClose />
							</IconButton>
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
						showExpandableButton={true}
						avatar={<div></div>} />
					<WidgetText expandable={true}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={9}>
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