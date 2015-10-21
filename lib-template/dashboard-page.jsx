import React from 'react'
import { IconButton, RaisedButton } from 'material-ui'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetControls, WidgetCloseControl, WidgetExpandControl, WidgetRefreshControl, WidgetActions } from 'reactivity'

class DashboardPage extends React.Component {
	render() {
		return (
			<Dashboard fullHeight={true}>
				<Widget width={12} closeControl={true}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle">
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6} closeControl={true}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle">
					</WidgetHeader>
					<WidgetText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</WidgetText>
				</Widget>
				<Widget width={6} initiallyExpanded={true} closeControl={true} onRefresh={()=>{console.log('refresh')}}>
					<WidgetHeader
						title="Title"
						subtitle="Subtitle" />
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
				<Widget width={9} controls={[<WidgetCloseControl/>]}>
					<WidgetActions>
						<RaisedButton label="Action1" primary={true}/>
    					<RaisedButton label="Action2" secondary={true}/>
					</WidgetActions>
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