import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentProps from './Test/Testdoc';

class App extends Component {
  render() {
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
      },
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ComponentProps date= {comment.date} text = {comment.text} author= {comment.author} />
      </div>
    );
  }
}


export default App;
