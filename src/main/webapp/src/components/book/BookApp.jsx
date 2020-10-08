import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import ListBooksComponent from './ListBooksComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import BookCompoenent from './BookComponent.jsx'
import WelcomeRoute from './WelcomeRoute.jsx'
import AuthenticationService from './AuthenticationService.js'
import axios from "axios";




class BookApp extends Component{
    render() {
        axios.defaults.headers.common['authorization'] = localStorage.getItem('basicToken')
        return(
            <div className="TodoApp">
                    <Router>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <WelcomeRoute path="/" exact component={LoginComponent}></WelcomeRoute>
                            <WelcomeRoute path="/login" component={LoginComponent}></WelcomeRoute>
                            {/*<AuthenticatedRoute path="/welcome/:name"  component={WelcomeComponent}></AuthenticatedRoute>*/}
                            <AuthenticatedRoute path="/welcome"  component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/books/:id"  component={BookCompoenent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/books"  component={ListBooksComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout"  component={LogoutComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}></Route>
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </Router>
            </div>
        )
    }
}


export default BookApp