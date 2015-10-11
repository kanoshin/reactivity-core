import React from 'react'
import { Router, Route, Link } from 'react-router'
import { Dashboard } from 'reactivity'

export default {
    run: () => {
        React.render((
            <Router>
                <Route path="/" component={Dashboard}>
                    {/*<Route path="about" component={About}/>
                    <Route path="users" component={Users}>
                        <Route path="/user/:userId" component={User}/>
                    </Route>
                    <Route path="*" component={NoMatch}/>*/}
                </Route>
            </Router>
        ), document.body)
    }
}