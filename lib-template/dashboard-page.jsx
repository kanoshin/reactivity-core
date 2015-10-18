import React from 'react'
import { Dashboard, Widget } from 'reactivity'

class DashboardPage extends React.Component {
	render() {
		return (
			<Dashboard>
				<Widget width={6}/>
				<Widget width={6}/>
				<Widget width={6}/>
			</Dashboard>
			);
	}
}

export default DashboardPage