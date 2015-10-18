import React from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Layout from 'lib-template/layout.jsx'
import ChartsPage from 'lib-template/charts-page.jsx'
import FormsPage from 'lib-template/forms-page.jsx'
import DashboardPage from 'lib-template/dashboard-page.jsx'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'

initTouchPlugin();

export default {
    run: () => {
        React.render((
            <Router history={createHistory()}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={DashboardPage}/>
                    <Route name='charts' path="/charts" component={ChartsPage}/>
                    <Route name='forms' path="/forms" component={FormsPage}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
            </Router>
        ), document.body)
    }
}