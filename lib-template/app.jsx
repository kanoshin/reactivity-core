import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Layout from 'lib-template/layout.jsx'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'

initTouchPlugin();

export default {
    run: () => {
        ReactDOM.render((
            <Router history={createHistory()}>
                <Route path="/"  component={Layout}>
                    <IndexRoute  getComponent={(location, cb) => {
                        System.import('lib-template/dashboard-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='textfields' path="/textfields" getComponent={(location, cb) => {
                        System.import('lib-template/text-fields-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='buttons' path="/buttons" getComponent={(location, cb) => {
                        System.import('lib-template/buttons-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='chartjs' path="/chartjs" getComponent={(location, cb) => {
                        System.import('lib-template/chart-js-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='progress' path="/progressBars" getComponent={(location, cb) => {
                        System.import('lib-template/progress-bars-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='decks' path="/progressDecks" getComponent={(location, cb) => {
                        System.import('lib-template/progress-decks-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='logins' path="/logins" getComponent={(location, cb) => {
                        System.import('lib-template/logins-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='sliders' path="/sliders" getComponent={(location, cb) => {
                        System.import('lib-template/sliders-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='checkboxes' path="/checkboxes" getComponent={(location, cb) => {
                        System.import('lib-template/checkboxes-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='popover' path="/popovers" getComponent={(location, cb) => {
                        System.import('lib-template/popovers-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='datepicker' path="/datepicker" getComponent={(location, cb) => {
                        System.import('lib-template/datepicker-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='dialogs' path="/dialogs" getComponent={(location, cb) => {
                        System.import('lib-template/dialogs-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='dropdown' path="/dropdown" getComponent={(location, cb) => {
                        System.import('lib-template/dropdown-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='form' path="/form" getComponent={(location, cb) => {
                        System.import('lib-template/form-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='tables' path="/tables" getComponent={(location, cb) => {
                        System.import('lib-template/table-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='images' path="/images" getComponent={(location, cb) => {
                        System.import('lib-template/image-gallery-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='icons' path="/icons/:category" getComponent={(location, cb) => {
                        System.import('lib-template/icons-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='snackbar' path="/snackbar" getComponent={(location, cb) => {
                        System.import('lib-template/snackbar-page.jsx').then(m => cb(null, m.default))}}/>
                    <Route name='autocomplete' path="/autocomplete" getComponent={(location, cb) => {
                        System.import('lib-template/autocomplete-page.jsx').then(m => cb(null, m.default))}}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
                <Route path="/login-page" getComponent={(location, cb) => {
                        System.import('lib-template/login-page.jsx').then(m => cb(null, m.default))}}/>
                <Route path="/error-404" getComponent={(location, cb) => {
                        System.import('lib-template/error-404.jsx').then(m => cb(null, m.default))}}/>
                <Route path="/sign-up-page" getComponent={(location, cb) => {
                        System.import('lib-template/sign-up-page.jsx').then(m => cb(null, m.default))}}/>
            </Router>
        ), document.getElementById('content'))
    }
}