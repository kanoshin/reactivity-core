import React from 'react'
import { Router, Route, Link, IndexRoute } from 'react-router'
import { Dashboard } from 'reactivity'
import Layout from 'lib-template/layout.jsx'

export default {
    run: () => {
        React.render((
            <Router>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Dashboard}/>
                    {/*<Route path="users" component={Users}>
                        <Route path="/user/:userId" component={User}/>
                    </Route>
                    <Route path="*" component={NoMatch}/>*/}
                </Route>
            </Router>
        ), document.body)
    }
}