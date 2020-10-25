import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './common/HeaderComponent.jsx'
import AuthenticatedRoute from './auth/AuthenticatedRoute.jsx'
import LoginComponent from './auth/LoginComponent.jsx'
import ErrorComponent from './common/ErrorComponent.jsx'
import ListBooksComponent from './book/ListBooksComponent.jsx'
import FooterComponent from './common/FooterComponent.jsx'
import WelcomeComponent from './common/WelcomeComponent.jsx'
import LogoutComponent from './auth/LogoutComponent.jsx'
import BookCompoenent from './book/BookComponent.jsx'
import WelcomeRoute from './common/WelcomeRoute.jsx'
import axios from "axios";


class BookApp extends Component{
    render() {
        axios.defaults.headers.common['authorization'] = localStorage.getItem('accessToken')
        return(
            <div className="BookApp">
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