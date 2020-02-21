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
      alert('please type something');
    }
  };

  render() {
    const { showClear, clearUser } = this.props;
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
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
        {showClear && (
          <button className="search__clear-btn" onClick={clearUser}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
