import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    } else {
      alert('please enter some text');
    }
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="search__group">
          <input
            className="search__group-input"
            type="text"
            placeholder="Search github users..."
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button className="search__group-submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
