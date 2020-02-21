import React, { Component } from 'react';
import Header from '../header/Header';
import Search from '../search/Search';
import CardList from '../card-list/CardList';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          login: 'mojombo',
          avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
          html_url: 'https://github.com/mojombo'
        },
        {
          id: 2,
          login: 'jaesma',
          avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
          html_url: 'https://github.com/jaesma'
        },
        {
          id: 3,
          login: 'pjhyett',
          avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
          html_url: 'https://github.com/pjhyett'
        },
        {
          id: 4,
          login: 'wycats',
          avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
          html_url: 'https://github.com/wycats'
        }
      ],
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
        <div className="container">
          <CardList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

// TODO: Continue search function, list of users in github etc.
