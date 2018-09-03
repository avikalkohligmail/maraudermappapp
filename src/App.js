import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import Map from './components/Map';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
    // window.onload = this.getContactsAjax();
    this.setCurrent = this.setCurrent.bind(this);
  }

  setCurrent(pageStatus) {
    let newState = { page: pageStatus };
    this.setState(newState);
  }

  render() {
    let renderElement = (<div>Home</div>);
    if (this.state.page == 'home') {
      renderElement = (
        <HomePage
          setCurrent={this.setCurrent}
        />
      )
    }
    if (this.state.page == 'map') {
      renderElement = (
        <Map
          setCurrent={this.setCurrent}
        />
      )
    }
    return renderElement;
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <HomePage/>
    //   </div>
    // );
  }
}

export default App;
