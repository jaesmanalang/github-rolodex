import React from 'react';
import './Card.scss';

const Card = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card">
      <img className="card__img" src={avatar_url} alt={login} />
      <h2 className="card__user">{login}</h2>
      <div className="card__read-more">View profile</div>
    </div>
  );
};

export default Card;
