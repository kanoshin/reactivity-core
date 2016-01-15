import React from 'react'
import Radium from 'radium'
import { IconsDict } from 'lib-template/icons.js'
import { IconButton } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetTitle, Grid, Cell } from 'reactivity'

let styles = {
    cell: {
        textAlign: 'center'
    }
};

@Radium
class IconsPage extends React.Component {
	render() {
		return (<Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Icons' />
					<WidgetText>
                        <Grid>
                        {IconsDict[this.props.params.category].map(iconObj => {
                            let Icon = iconObj.icon;
                            return (
                                <Cell size={'3/12'} style={styles.cell}>
                                    <IconButton>
                                        <Icon />
                                    </IconButton>
                                    <div>
                                        {iconObj.name}
                                    </div>
                                </Cell>);
                        })}
                        </Grid>
					</WidgetText>
				</Widget>
			</Dashboard>);
	}
}

export default IconsPage