import React from 'react';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';

import './CardList.scss';

const CardList = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="card-list">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default CardList;
