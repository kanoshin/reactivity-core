import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'

import Layout from 'lib-template/layout.jsx'
import Dashboard from 'lib-template/dashboard-page.jsx'
import TextFields from 'lib-template/text-fields-page.jsx'
import Buttons from 'lib-template/buttons-page.jsx'
import ChartJs from 'lib-template/chart-js-page.jsx'
import ProgressBars from 'lib-template/progress-bars-page.jsx'
import ProgressDecks from 'lib-template/progress-decks-page.jsx'
import Logins from 'lib-template/logins-page.jsx'
import Sliders from 'lib-template/sliders-page.jsx'
import Checkboxes from 'lib-template/checkboxes-page.jsx'
import Popovers from 'lib-template/popovers-page.jsx'
import Datepicker from 'lib-template/datepicker-page.jsx'
import Dialogs from 'lib-template/dialogs-page.jsx'
import Dropdown from 'lib-template/dropdown-page.jsx'
import Form from 'lib-template/form-page.jsx'
import Tables from 'lib-template/table-page.jsx'
import Images from 'lib-template/image-gallery-page.jsx'
import Icons from 'lib-template/icons-page.jsx'
import Snackbar from 'lib-template/snackbar-page.jsx'
import Autocomplete from 'lib-template/autocomplete-page.jsx'
import LoginPage from 'lib-template/login-page.jsx'
import Error404Page from 'lib-template/error-404.jsx'
import SignUpPage from 'lib-template/sign-up-page.jsx'

initTouchPlugin();

export default {
    run: () => {
        ReactDOM.render((
            <Router history={createHistory()}>
                <Route path="/"  component={Layout}>
                    <IndexRoute  component={Dashboard}/>
                    <Route name='textfields' path="/textfields" component={TextFields}/>
                    <Route name='buttons' path="/buttons" component={Buttons}/>
                    <Route name='chartjs' path="/chartjs" component={ChartJs}/>
                    <Route name='progress' path="/progressBars" component={ProgressBars}/>
                    <Route name='decks' path="/progressDecks" component={ProgressDecks}/>
                    <Route name='logins' path="/logins" component={Logins}/>
                    <Route name='sliders' path="/sliders" component={Sliders}/>
                    <Route name='checkboxes' path="/checkboxes" component={Checkboxes}/>
                    <Route name='popover' path="/popovers" component={Popovers}/>
                    <Route name='datepicker' path="/datepicker" component={Datepicker}/>
                    <Route name='dialogs' path="/dialogs" component={Dialogs}/>
                    <Route name='dropdown' path="/dropdown" component={Dropdown}/>
                    <Route name='form' path="/form" component={Form}/>
                    <Route name='tables' path="/tables" component={Tables}/>
                    <Route name='images' path="/images" component={Images}/>
                    <Route name='icons' path="/icons/:category" component={Icons}/>
                    <Route name='snackbar' path="/snackbar" component={Snackbar}/>
                    <Route name='autocomplete' path="/autocomplete" component={Autocomplete}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
                <Route path="/login-page" component={LoginPage}/>
                <Route path="/error-404" component={Error404Page}/>
                <Route path="/sign-up-page" component={SignUpPage}/>
            </Router>
        ), document.getElementById('content'))
    }
}