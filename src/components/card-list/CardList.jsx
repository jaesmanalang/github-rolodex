import React from 'react';
import Card from '../card/Card';
import './CardList.scss';

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map((user) => (
        <Card id={user.id} user={user} />
      ))}
    </div>
  );
};

export default CardList;
