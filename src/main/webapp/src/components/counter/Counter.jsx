import React, {Component} from 'react';
import './Counter.css'
import PropTypes from 'prop-types'




class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }

    increment(by) {
        this.setState(
            (prevState) => {
               return{counter: prevState.counter + by}
            }
        )
    }

    render() {
      return (
        <div className="Counter">
         <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
         <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
         <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
         <span className="count">{this.state.counter}</span>
        </div>
      );
    }
  }

class CounterButton extends Component{

    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }
    
    render() {
        return (
            <div className="Counter">
              <button onClick={this.increment}>+{this.props.by}</button>       
            </div>
          );
    }

    increment() {
        this.props.incrementMethod(this.props.by);
    }
     
}

export default Counter

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}