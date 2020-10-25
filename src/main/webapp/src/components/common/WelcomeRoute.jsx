
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../../api/AuthenticationService.js'

class WelcomeRoute extends Component {
    render() {
        if (!AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/welcome" />
        }

    }
}

export default WelcomeRoute