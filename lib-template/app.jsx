import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Layout from 'lib-template/layout.jsx'
import ChartsPage from 'lib-template/charts-page.jsx'
import FormsPage from 'lib-template/forms-page.jsx'
import DashboardPage from 'lib-template/dashboard-page.jsx'
import ChartJsPage from 'lib-template/chart-js-page.jsx'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'
import LoginsPage from 'lib-template/logins-page.jsx'
import ProgressPage from 'lib-template/progress-page.jsx'

initTouchPlugin();

export default {
    run: () => {
        ReactDOM.render((
            <Router history={createHistory()}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={DashboardPage}/>
                    <Route name='charts' path="/charts" component={ChartsPage}/>
                    <Route name='forms' path="/forms" component={FormsPage}/>
                    <Route name='chartjs' path="/chartjs" component={ChartJsPage}/>
                    <Route name='progress' path="/progress" component={ProgressPage}/>
                    <Route name='logins' path="/logins" component={LoginsPage}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
            </Router>
        ), document.body)
    }
}