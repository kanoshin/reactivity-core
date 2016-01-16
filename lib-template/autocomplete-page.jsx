import React from 'react'
import Radium from 'radium'
import { TextField, AutoComplete } from 'material-ui'
import { Dashboard, Widget, WidgetText, WidgetHeader, WidgetTitle, Grid, Cell } from 'reactivity'

@Radium
class AutocompletePage extends React.Component {
    constructor() {
        super();
		this.state = {
            fruits: ["Apple", "Apricot", "Avocado", "Banana", "Bilberry", "Blackberry", "Blackcurrant", "Blueberry", "Boysenberry", "Cantaloupe", "Currant", "Cherry", "Cherimoya", "Cloudberry", 
                "Coconut", "Cranberry", "Damson", "Date", "Dragonfruit", "Durian", "Elderberry", "Feijoa", "Fig", "Goji berry", "Gooseberry", "Grape", "Raisin", "Grapefruit", "Guava", 
                "Huckleberry", "Jabouticaba", "Jackfruit", "Jambul", "Jujube", "Juniper berry", "Kiwi fruit", "Kumquat", "Lemon", "Lime", "Loquat", "Lychee", "Mango", "Marion berry", "Melon", 
                "Cantaloupe", "Honeydew", "Watermelon", "Miracle fruit", "Mulberry", "Nectarine", "Olive", "Orange", "Blood Orange", "Clementine", "Mandarine", "Tangerine", "Papaya", "Passionfruit", 
                "Peach", "Pear", "Persimmon", "Physalis", "Plum", "Pineapple", "Pumpkin", "Pomegranate", "Pomelo", "Purple Mangosteen", "Quince", "Raspberry", "Salmonberry", "Rambutan", "Redcurrant", 
                "Salal berry", "Satsuma", "Star fruit", "Strawberry", "Squash", "Tamarillo", "Tamarind", "Tomato", "Ugli fruit"]
        };
    }
    
	render() {
		return <Dashboard>
				<Widget width={12}>
					<WidgetTitle title='Autocomplete' />
					<WidgetText>
						<Grid>
							<Cell size='3/3'>
                                <AutoComplete
                                    dataSource={this.state.fruits}                                    
                                    />
                                <br/>
                                <AutoComplete
                                    hintText="Hint: fruit name"
                                    dataSource={this.state.fruits}
                                    />
                                <br/>
                                <AutoComplete
                                    floatingLabelText="fuzzy search"
                                    filter={AutoComplete.fuzzyFilter}
                                    dataSource={this.state.fruits} />
                                <br/>
                                <AutoComplete
                                    floatingLabelText="case insensitive"
                                    filter={AutoComplete.caseInsensitiveFilter}
                                    dataSource={this.state.fruits} />
                                <br/>
							</Cell>
						</Grid>
					</WidgetText>
				</Widget>
			</Dashboard>
	}
}

export default AutocompletePage