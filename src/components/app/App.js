import React, { Component } from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    };
  }

  searchUser(text) {
    console.log(text);
  }

  render() {
    return (
      <div className="App">
        <Header title="GitHub RolodeX" />
        <Search searchUser={this.searchUser} />
      </div>
    );
  }
}

export default App;
