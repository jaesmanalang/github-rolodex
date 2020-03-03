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
      company,
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
        <div className="back-to-search">
          <Link to="/" className="user__link">
            <i className="fas fa-arrow-left"></i> Go Back
          </Link>
          Hireable:{' '}
          {hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
        </div>
        <div className="user__card">
          <div className="user__card-avatar">
            <img
              className="user__card-avatar-photo"
              src={avatar_url}
              alt="{login}"
            />
            <h2>{name}</h2>
            <p className="text-white">
              Location: {location ? location : 'none'}
            </p>
          </div>
          <div className="user__card-info">
            <div className="user__card-info-bio">
              <strong className="text-white bio-title">Bio</strong>
              <p className="text-blur bio-profile">
                {bio === null ? 'none' : bio}
              </p>
            </div>

            <div className="user__card-info-username">
              <p className="text-white">Username: {login}</p>
              <p className="text-white">
                Company: {company === null ? 'none' : company}
              </p>
              <p className="text-white">Website: {blog ? blog : 'none'}</p>
            </div>
            <a className="user__card-info-url" href={html_url}>
              Visit github profile
            </a>
          </div>
        </div>
        <div className="user__footer">
          <p className="user__footer-followers">Followers: {followers}</p>
          <p className="user__footer-following">Following: {following}</p>
          <p className="user__footer-repos">Public Repos: {public_repos}</p>
          <p className="user__footer-gists">Public Gists: {public_gists}</p>
        </div>
      </div>
    );
  }
}

export default User;
