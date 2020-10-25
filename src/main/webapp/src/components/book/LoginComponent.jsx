import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            showSuccessMessage: false,
            hasLoginFailed: false
        }
         this.handleChange = this.handleChange.bind(this)
         this.loginClicked = this.loginClicked.bind(this)

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div className="form-group">
                        <input  className="form-control max-margin-bottom" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input  className="form-control max-margin-bottom" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                    </div>
                   
                   <div><button className="form-control btn btn-primary" onClick={this.loginClicked}>Login</button></div>
                    
                </div>
            </div>
        )
    }

     handleChange(event) {
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }

    loginClicked() {

        let loginRequest = {
            username: this.state.username,
            password: this.state.password
        }

        AuthenticationService
        .executeBasicAuthenticationService(loginRequest)
            .then(response => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, response.data.accessToken)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(error => {
                this.setState({showSuccessMessage:false})
                this.setState({hasLoginFailed:true})
                if(error.status === 401) {
                } else {
                }
        });

    }


}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Successful Login</div>
//     }
//     return null
// }

export default LoginComponent