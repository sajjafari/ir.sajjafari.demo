import React, {Component} from 'react';

class WelcomeComponent extends Component{

    constructor(props) {
        super(props)
       // this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }

    /*retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then(response => console.log(response));
    }*/

    /*componentDidMount() {

        // if (this.state.id === -1) {
        //     return
        // }

        //let username = AuthenticationService.getLoggedInUserName()

        HelloWorldService.executeHelloWorldService()
        .then(response => console.log(response));
    }*/

    

    render() {
        return(
            <>
                {/*<h1>Sajjafari</h1>
                <div className="container">
                     Welcome {this.props.match.params.name}.
                     Please visit this <Link to="/books">link</Link>.
                </div>
                <div className="container">
                     Click to get a better welcome message
                </div>*/}
                {/*<div>
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Welcome Message</button>
                </div>       */}
            </>
            
        )
    }
}

export default WelcomeComponent
