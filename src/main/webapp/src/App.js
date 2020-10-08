import React, { Component } from 'react';
import BookApp from './components/book/BookApp';
import './App.css';
import './bootstrap.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BookApp></BookApp>
      </div>
    );
  }
}


export default App;