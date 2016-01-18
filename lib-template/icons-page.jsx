import React from 'react'
import Radium from 'radium'
import { IconsDict } from 'lib-template/icons.js'
import { IconButton } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetTitle, WidgetHeader, Grid, Cell } from 'reactivity'

let styles = {
    cell: {
        textAlign: 'center'
    },
    iconName: {
        overflow: 'hidden'
    }
};

let prepareName = (name) => {
    let res = '';
    name.split('').forEach(ch => {
        if(ch.toUpperCase() === ch || isDigit(ch)) {
            if(res && !isDigit(res[res.length - 1])){
                res += '-' + ch.toLowerCase()
            }
            else {
                res += ch.toLowerCase()
            }
        }
        else {
            res += ch;
        }
    });
    return res;
}, isDigit = (ch) => ch * 0 == 0;

@Radium
class IconsPage extends React.Component {
	render() {
		return (<Dashboard>
				<Widget width={12}>
					<WidgetTitle title={`${this.props.params.category[0].toUpperCase()}${this.props.params.category.slice(1)} Icons`} />
                    <WidgetText>
                        <strong>
                        Click on icon to copy import code
                        </strong>
                    </WidgetText>
					<WidgetText>
                        <Grid>
                            {IconsDict[this.props.params.category].map(iconObj => {
                                let Icon = iconObj.icon;
                                return (
                                    <Cell size={'3/12'} style={styles.cell} key={iconObj.name}>
                                        <IconButton onTouchTap={() => this._copyToClipboard(this.props.params.category, iconObj.name)}>
                                            <Icon />
                                        </IconButton>
                                        <div style={styles.iconName}>
                                            {iconObj.name}
                                        </div>
                                    </Cell>);
                            })}
                        </Grid>
					</WidgetText>
				</Widget>
			</Dashboard>);
	}
    
    _copyToClipboard = (category, name) => {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", `import ${name} from 'material-ui/lib/svg-icons/${category.toLowerCase()}/${prepareName(name)}'`);
    }
}

export default IconsPage