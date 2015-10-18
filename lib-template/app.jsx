import React from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
import { Dashboard } from 'reactivity'
import Layout from 'lib-template/layout.jsx'
import Charts from 'lib-template/charts.jsx'
import Forms from 'lib-template/forms.jsx'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'

initTouchPlugin();

let history = createHistory({
  queryKey: false
});

export default {
    run: () => {
        React.render((
            <Router history={history}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Dashboard}/>
                    <Route name='charts' path="/charts" component={Charts}/>
                    <Route name='forms' path="/forms" component={Forms}/>
                    {/*<Route path="users" component={Users}>
                        <Route path="/user/:userId" component={User}/>
                    </Route>
                    <Route path="*" component={NoMatch}/>*/}
                </Route>
            </Router>
        ), document.body)
    }
}