import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Layout from 'lib-template/layout.jsx'
import ChartsPage from 'lib-template/charts-page.jsx'
import TextFieldsPage from 'lib-template/text-fields-page.jsx'
import DashboardPage from 'lib-template/dashboard-page.jsx'
import ChartJsPage from 'lib-template/chart-js-page.jsx'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'
import LoginsPage from 'lib-template/logins-page.jsx'
import ButtonsPage from 'lib-template/buttons-page.jsx'
import ProgressBarsPage from 'lib-template/progress-bars-page.jsx'
import ProgressDecksPage from 'lib-template/progress-decks-page.jsx'
import SlidersPage from 'lib-template/sliders-page.jsx'
import SwitchersPage from 'lib-template/switchers-page.jsx'

initTouchPlugin();

export default {
    run: () => {
        ReactDOM.render((
            <Router history={createHistory()}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={DashboardPage}/>
                    <Route name='charts' path="/charts" component={ChartsPage}/>
                    <Route name='textfields' path="/textfields" component={TextFieldsPage}/>
                    <Route name='buttons' path="/buttons" component={ButtonsPage}/>
                    <Route name='chartjs' path="/chartjs" component={ChartJsPage}/>
                    <Route name='progress' path="/progressBars" component={ProgressBarsPage}/>
                    <Route name='decks' path="/progressDecks" component={ProgressDecksPage}/>
                    <Route name='logins' path="/logins" component={LoginsPage}/>
                    <Route name='sliders' path="/sliders" component={SlidersPage}/>
                    <Route name='switchers' path="/switchers" component={SwitchersPage}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
            </Router>
        ), document.getElementById('content'))
    }
}