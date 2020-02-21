import React, { Component } from 'react';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';
import './User.scss';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;
    if (loading) return <Spinner />;
    return (
      <div className="user">
        <Link to="/" className="user__link">
          <i className="fas fa-arrow-left"></i> Go Back
        </Link>
      </div>
    );
  }
}

export default User;
